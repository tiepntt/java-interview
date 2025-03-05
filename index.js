import * as dotenv from "dotenv";

import { OpenAI } from "openai";
import fs from 'fs';

dotenv.config();

console.log(process.env.OPENAI_API_KEY);


const args = process.argv.slice(2);
const folder = args[0];
const heading = args[1] ?? 'heading2';


const srcDir = `./en/${folder}`;
const outDir = `./vi/${folder}`;


const chatgptAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})


function splitMarkdown(fileContent, filename) {
    const sections = fileContent.split(/^##\s+/m); // Tách theo Heading 2
    const result = [];

    const splitStr = heading === 'heading2' ? '## ' : '### ';

    sections.forEach((section, index) => {
        if (section.trim()) { // Bỏ qua phần rỗng
            const content = index === 0 ? section : splitStr + section; // Thêm lại heading 2 nếu không phải phần đầu
            result.push({
                filename: `${filename}_${index}.md`,
                content: content.trim()
            });
        }
    });

    return result;
}


async function translateText(text, targetLanguage = "vi",
    onCompletion
) {
    try {
        const stream = await chatgptAi.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a professional translator. Translate the following text into ${targetLanguage}.`,
                },
                {
                    role: "user",
                    content: text,
                },
            ],
            temperature: 0.3,
            stream: true
        });

        for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            await onCompletion(content);
        }


    } catch (error) {
        console.error("Error translating text:", error);
    }
}


const translateFile = async (fileDir) => {
    const fileName = fileDir.split('/').pop();
    console.log(`Translating file: ${fileName}`);
    const fileContent = fs.readFileSync(fileDir, 'utf8');

    // split fileContent by heading 2

    const fileOutDir = `${outDir}/${fileName}`;

    // create output file if not exist
    if (!fs.existsSync(fileOutDir)) {
        fs.writeFileSync(fileOutDir, '');
    }

    // clear file
    fs.writeFileSync(fileOutDir, '');

    const sections = splitMarkdown(fileContent, fileDir);

    for (const section of sections) {
        const { content } = section;
        await translateText(content, "vi", async (translatedText) => {
            // write content to file
            fs.appendFileSync(fileOutDir, translatedText);
        });
        fs.appendFileSync(fileOutDir, '\n\n');

    }

}



const translateFiles = async (srcDir) => {
    // create output directory if not exist
    console.log(`Translating files in directory: ${srcDir} with split heading: ${heading}`);

    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }



    const files = fs.readdirSync(srcDir);
    await Promise.all(files.map(async (file) => {
        const fileDir = `${srcDir}/${file}`;
        const stat = fs.statSync(fileDir);
        if (stat.isDirectory()) {
            return;
        }

        await translateFile(fileDir);

        // log success color    
        console.log(`File ${file} translated successfully!`);

    }))


}


translateFiles(srcDir);

// run script node src/index.js <srcDir> heading3
