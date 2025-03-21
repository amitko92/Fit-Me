import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({unique: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    creationDate: string;

    @Prop({required: true})
    birthDate: string;

    @Prop({required: true})
    gender: string;

}

export const UserSchema = SchemaFactory.createForClass(User);