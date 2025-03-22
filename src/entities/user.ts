export class User {
    
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    creationDate: string;
    birthDate: string;
    gender: string;

    constructor(firstName: string, lastName: string, email: string, password: string, creationDate: string, birthDate: string, gender: string, id: string) {
        
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;
        this.birthDate = birthDate;
        this.gender = gender;
    }
}