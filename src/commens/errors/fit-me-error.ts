
export class FitMeError extends Error {

    private readonly errorCode: string;

    constructor(name: string, errorCode: string, message: string) {
        super(message);
        this.name = name;
        this.message = message;
        this.errorCode = errorCode;
    }
}