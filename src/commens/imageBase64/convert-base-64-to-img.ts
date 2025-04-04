import { ImageBase64 } from "src/entities/ImageBase64";
import * as fs from 'fs-extra';
import * as path from 'path';


export async function convertBase64ToImg(imageBase64: ImageBase64, outputDir: string): Promise<void> {
    try {
        // Ensure the output directory exists
        await fs.ensureDir(outputDir);

        // Decode the Base64 content
        const base64Data = imageBase64.content.replace(/^data:image\/\w+;base64,/, '');
        const binaryData = Buffer.from(base64Data, 'base64');

        // Define the output file path
        const filePath = path.join(outputDir, `${imageBase64.name}.png`);

        // Write the binary data to a file
        await fs.writeFile(filePath, binaryData);

        console.log(`Image saved successfully at: ${filePath}`);
    } catch (error) {
        console.error('Error saving the image:', error);
    }
}