import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Item {

    @Prop({required: true})
    @Prop({unique: true})
    imageName: string;

    @Prop({required: true})
    userId: string;

    @Prop({required: true})
    description: string;

    @Prop({unique: true})
    tags: string[];

    @Prop({unique: true})
    itemType: string[];

    @Prop({required: true})
    creationDate: string;

}

export const ItemSchema = SchemaFactory.createForClass(Item);