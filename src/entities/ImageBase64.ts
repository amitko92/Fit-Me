import { ImageTypes } from "src/commens/enums/image-types.enum";


export class ImageBase64 {

    name: string;
    type: ImageTypes;
    size: number;
    content: string;

    constructor(fileName: string, fileType: ImageTypes, fileSize: number, content: string) {
        this.name = fileName;
        this.type = fileType;
        this.size = fileSize;
        this.content = content;
    }

    toString(): string {
        return `type:${this.type};base64,${this.content.slice(0, 100)}`;
    }
}