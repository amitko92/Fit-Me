import { FitMeError } from "src/commens/errors/fit-me-error";


export enum AddOneErrorCode {
    INVALID_ITEM_TYPE = 'INVALID_ITEM_TYPE',
    INVALID_IMAGE_BASE64 = 'INVALID_IMAGE_BASE64',
    INVALID_TAGS = 'INVALID_TAGS',
    INTTRNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export class AddOneError extends FitMeError {
    
    constructor(message: string, errorCode: AddOneErrorCode) {
        
        super('AddOneError', message, errorCode);
    }
}