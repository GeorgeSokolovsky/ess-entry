/* tslint:disable */
export class CreateFieldInput {
    name: string;
    type: string;
}

export class CreateParticipantInput {
    name: string;
    role: string;
    validators?: string[];
}

export class CreateTemplateInput {
    name: string;
    fields: string[];
    participants: string[];
}

export class CreateValidatorInput {
    rule: string;
    payload?: Payload;
}

export class RegisterUserInput {
    login: string;
    password: string;
}

export class SignInUserInput {
    login: string;
    password: string;
}

export class UpdateTemplateInput {
    name: string;
    fields: string[];
    participants: string[];
}

export class UpdateValidatorInput {
    _id: string;
    rule?: string;
    payload?: Payload;
}

export class Field {
    _id: string;
    name: string;
    type: string;
}

export abstract class IMutation {
    abstract registerUser(registerUserInput?: RegisterUserInput): User | Promise<User>;

    abstract signIn(signInUserInput?: SignInUserInput): string | Promise<string>;

    abstract createTemplate(createTemplateInput: CreateTemplateInput): Template | Promise<Template>;

    abstract updateTemplate(id: string, updateTemplateInput: UpdateTemplateInput): Template | Promise<Template>;

    abstract createField(createFieldInput?: CreateFieldInput): Field | Promise<Field>;

    abstract createParticipant(createParticipantInput?: CreateParticipantInput): Participant | Promise<Participant>;

    abstract createValidator(createValidatorInput?: CreateValidatorInput): Validator | Promise<Validator>;

    abstract updateValidator(updateValidatorInput?: UpdateValidatorInput): Validator | Promise<Validator>;
}

export class Participant {
    _id: string;
    name: string;
    role: string;
    validators: Validator[];
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;

    abstract verify(token: string): User | Promise<User>;

    abstract templates(): Template[] | Promise<Template[]>;

    abstract template(id: string): Template | Promise<Template>;

    abstract fields(): Field[] | Promise<Field[]>;

    abstract participants(): Participant[] | Promise<Participant[]>;

    abstract validators(): Validator[] | Promise<Validator[]>;

    abstract validator(id: string): Validator | Promise<Validator>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Template {
    _id: string;
    name: string;
    fields: Field[];
    participants: Participant[];
    createdBy: User;
    updatedBy?: User;
    createdAt: string;
    updatedAt?: string;
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
