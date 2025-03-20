export class User {
    
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    creationDate: string;
    birthDate: string;

    constructor(firstName: string, lastName: string, email: string, password: string, creationDate: string, birthDate: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;
        this.birthDate = birthDate;
    }
}