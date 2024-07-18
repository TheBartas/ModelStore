import { Body, Injectable, Query, Request, Response } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema } from "mongoose";
import { Cart, ProductCart } from "src/schemas/cart.schema";
import { CreateCartDto, CreateProductCartDto } from "./dto/create.cart.dto";
import { request } from "http";
import { UsersService } from "src/users/users.service";

//https://www.mongodb.com/docs/manual/tutorial/update-documents/




@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartModel : Model<Cart>, private usersService : UsersService) {}


    private async returnUserId() {
        const user = request['user'].username;
        const userID = (await this.usersService.getUserByUsername(user))._id;
        return userID;
    }

    private async findProduct(userID : Schema.Types.ObjectId, prod_id : number) : Promise<ProductCart> {
        const cart = (await this.cartModel.findOne({ customer_id : userID}))
        return cart.products.find((product) => product.prod_id === prod_id);
    }

    async createCart(createcaretDto : CreateCartDto) : Promise<Cart> {
        const createdCart = new this.cartModel(createcaretDto);
        return createdCart.save();
    }

    async getProducts() : Promise<ProductCart[]> {
        const userID = await this.returnUserId();
        const result = (await this.cartModel.findOne({customer_id : userID})).products;
        return result;
    }

    async addProductToCart(@Body() createProductCartDto : CreateProductCartDto, @Response() res) : Promise<Cart | Response> {
        const userID = await this.returnUserId();
        const cart = await this.cartModel.findOne({ customer_id : userID});
        let alreadyThere = cart.products.find((product) => product.prod_id === createProductCartDto.prod_id)

        if (!alreadyThere) {
            cart.products.push(createProductCartDto);
            return await cart.save();
        } else {
            return res.status(300).json({ "message " : 'Product already added!'});
        }
    }

    async addQuantity(@Query() query) {    
        const prod_id = parseInt(query.prod_id);
        const userID = await this.returnUserId();
        const result = await this.findProduct(userID, prod_id);
        return await this.cartModel.findOneAndUpdate(
            { "customer_id": userID },
            { "$set": { "products.$[elem].quantity": result.quantity + 1}},
            { "arrayFilters" : [{ "elem.prod_id" : prod_id}]}
        );
    }

    async deleteProduct(@Query() query) : Promise<Cart> {
        const userID = await this.returnUserId();
        const cart = await this.cartModel.findOne({customer_id : userID});
        const products = cart.products;
        const index = products.findIndex((prod) => prod.prod_id === parseInt(query.prod_id));
        products.splice(index, 1);
        return cart.save();
    }

    async deleteQuantity(@Query() query) {    
        const prod_id = parseInt(query.prod_id);
        const userID = await this.returnUserId();
        const result = await this.findProduct(userID, prod_id );
        return await this.cartModel.findOneAndUpdate(
            { "customer_id": userID },
            { "$set": { "products.$[elem].quantity": result.quantity - 1}},
            { "arrayFilters" : [{ "elem.prod_id" : prod_id}]}
        );
    }

}