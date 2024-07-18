import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Post, 
    Put, 
    Query, 
    Response,
    Request
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { Cart, ProductCart } from "src/schemas/cart.schema";
import { CreateCartDto, CreateProductCartDto } from "./dto/create.cart.dto";
import { UsersService } from "src/users/users.service";


@Controller('cart')
export class CartController {
    constructor(private cartService : CartService) {}

    @Post('add')
    async createCart(@Body() createCartDto : CreateCartDto) : Promise<Cart>{
        return await this.cartService.createCart(createCartDto);
    }

    @Get('products-in-cart')
    async getProductsFromCart() : Promise<ProductCart[]> {
        return await this.cartService.getProducts();
    }

    @Put('add-product')
    async addProductToCart(@Query() query : { customer_id : string}, @Body() createProductCartDto : CreateProductCartDto, @Response() res) : Promise<Cart | Response> {
        return await this.cartService.addProductToCart(query, createProductCartDto, res);
    }

    @Delete('delete-product')
    async deleteProductFromCart(@Query() query : { customer_id : string, prod_id : number}) : Promise<Cart> {
        return await this.cartService.deleteProduct(query);
    }

    @Put('add-product/quantity')
    async addQuantity(@Query() query : { customer_id : string, prod_id : number}) {
        return await this.cartService.addQuantity(query);
    }

    @Delete('delete-quantity')
    async deleteQuantity(@Query() query : { customer_id : string, prod_id : number}) {
        return await this.cartService.deleteQuantity(query);
    }
}