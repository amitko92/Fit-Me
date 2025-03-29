
export class FitMeError extends Error {

    private readonly errorCode: string;

    constructor(message: string) {
        super(message);
        this.name = 'FitMeError';
    }
}