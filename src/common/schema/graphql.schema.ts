/* tslint:disable */
export class CreateFieldInput {
    name: string;
    type: string;
}

export class CreateValidatorInput {
    rule: string;
    payload?: Payload;
}

export class RegisterUserInput {
    login: string;
    password: string;
}

export class Field {
    _id: string;
    name: string;
    type: string;
}

export abstract class IMutation {
    abstract createField(createFieldInput?: CreateFieldInput): Field | Promise<Field>;

    abstract createValidator(createValidatorInput?: CreateValidatorInput): Validator | Promise<Validator>;

    abstract registerUser(registerUserInput?: RegisterUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract validators(): Validator[] | Promise<Validator[]>;

    abstract user(id: string): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    _id: string;
    login: string;
    email?: string;
    role?: string;
    firstName?: string;
    lastName?: string;
}

export class Validator {
    _id: string;
    rule: string;
    payload?: Payload;
    createdAt: string;
    updatedAt: string;
}

export type Payload = any;
