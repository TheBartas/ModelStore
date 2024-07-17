import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart } from "src/schemas/cart.schema";
import { CreateCartDto } from "./dto/create.cart.dto";





@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartModel : Model<Cart>) {}

    async createCart(createcaretDto : CreateCartDto) : Promise<Cart> {
        const createdCart = new this.cartModel(createcaretDto);
        return createdCart.save();
    }
}