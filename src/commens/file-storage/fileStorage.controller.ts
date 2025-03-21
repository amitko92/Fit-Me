import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileStorageService } from './fileStorage.service';
import { Express } from 'express';

@Controller('file-storage')
export class FileStorageController {

    constructor(private readonly fileStorageService: FileStorageService) {}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      return {
        message: 'File uploaded successfully',
        filePath: file.path,
      };
    }
}
