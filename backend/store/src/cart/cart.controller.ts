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

    @Post('add-product')
    async addProductToCart(@Body() createProductCartDto : CreateProductCartDto, @Response() res) : Promise<Cart | Response> {
        return await this.cartService.addProductToCart(createProductCartDto, res);
    }

    @Delete('delete-product')
    async deleteProductFromCart(@Query() query : { prod_id : number}) : Promise<Cart> {
        return await this.cartService.deleteProduct(query);
    }

    @Put('add-product/quantity')
    async addQuantity(@Query() query : { prod_id : number}) {
        return await this.cartService.addQuantity(query);
    }

    @Put('delete-quantity')
    async deleteQuantity(@Query() query : { prod_id : number}) {
        return await this.cartService.deleteQuantity(query);
    }
}