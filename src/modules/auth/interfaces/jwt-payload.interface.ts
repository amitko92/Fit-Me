export interface JwtPayload {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    creationDate: string;
    email: string;
    iat: number;
    exp: number;
}