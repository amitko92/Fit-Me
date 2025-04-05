import * as fs from 'fs-extra';
import * as path from 'path';


export class FileStorageManager {

    private readonly filesStorageUrl: string;

    constructor() {
        this.filesStorageUrl = process.env.FILES_STORAGE_URL || '';
    }


    getFullFilePath(fileName: string) {

        // TODO - Implement get full file path logic
    }

    deleteFile(fileName: string) {

        // TODO - Implement delete file logic
    }

    /**
     * Uploads a file to the server.
     * @param buffer The binary data of the file.
     * @param userId The ID of the user uploading the file.
     * @returns The name of the uploaded file.
     */
    async uploadFile(buffer: Buffer<ArrayBuffer>, userId: string): Promise<string> {

        // Ensure the output directory exists
        await fs.ensureDir(this.filesStorageUrl);

        // Generate a unique name for the file
        const fileName = this.buildFileName(userId);

        // Define the output file path
        const filePath = path.join(this.filesStorageUrl, fileName);

        // Write the binary data to a file
        await fs.writeFile(filePath, buffer);

        console.log(`Image saved successfully at: ${filePath}`);
        return fileName;
    }


    private buildFileName(userId: string): string {

        // Get the current date and time
        const now = new Date();

        // Format the date and time as YYYY_MM_DD_HH_mm_ss
        const formattedDate = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
        const formattedTime = `${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;

        // Combine the userId with the formatted date and time
        return `${userId}_${formattedDate}_${formattedTime}.png`;
    }

}