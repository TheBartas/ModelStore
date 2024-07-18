import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Cart, CartSchema } from "src/schemas/cart.schema";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { UsersModule } from "src/users/users.module";



@Module({
    imports: [MongooseModule.forFeature([{ name : Cart.name, schema : CartSchema}]), UsersModule],
    providers : [CartService],
    controllers : [CartController]
})

export class CartModule {}