import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({_id : false})
class Product {
    @Prop({required : true})
    prod_id : number;

    @Prop({required : true})
    name : string;

    @Prop({required : true})
    quantity : number;
}



@Schema()
export class Cart {
    @Prop({required : true})
    customer_id : string;

    @Prop([Product])
    products : Product[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);