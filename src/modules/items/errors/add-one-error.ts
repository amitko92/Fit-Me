import { FitMeError } from "src/commens/errors/fit-me-error";

export class AddOneError extends FitMeError {
    
    constructor(message: string) {
        super(message);
        this.name = 'AddOneError';
    }
}