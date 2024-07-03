import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Product {
    @Prop({unique : true, required : true})
    prod_id : number;
    @Prop({required : true})
    name : string;

    @Prop({required : true})
    scale : string;

    @Prop({required : true})
    price : number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);