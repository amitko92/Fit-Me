import { ImageBase64 } from "src/entities/ImageBase64";


export async function convertBase64ToImg(imageBase64: ImageBase64): Promise<Buffer<ArrayBuffer>> {

    // Decode the Base64 content
    const base64Data = imageBase64.content.replace(/^data:image\/\w+;base64,/, '');
    const binaryData = Buffer.from(base64Data, 'base64');

    return binaryData;
}