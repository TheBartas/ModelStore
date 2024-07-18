import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({_id : false})
export class ProductCart {
    @Prop({required : true})
    prod_id : number;

    @Prop({required : true})
    name : string;

    @Prop({required : true})
    quantity : number;
}


export const ProductCartSchema = SchemaFactory.createForClass(ProductCart);


@Schema()
export class Cart {
    @Prop({required : true})
    customer_id : string;

    @Prop({type : [ProductCartSchema]})
    products : ProductCart[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);