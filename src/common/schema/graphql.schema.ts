/* tslint:disable */
export class RegisterUserInput {
    login: string;
    password: string;
}

export abstract class IMutation {
    abstract registerUser(registerUserInput?: RegisterUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    login: string;
    email?: string;
    role?: string;
    firstName?: string;
    lastName?: string;
}
