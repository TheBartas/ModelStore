import { 
    Body, 
    Controller, 
    Post 
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { Cart } from "src/schemas/cart.schema";
import { CreateCartDto } from "./dto/create.cart.dto";


@Controller('cart')
export class CartController {
    constructor(private cartService : CartService) {}

    @Post('add')
    async createCart(@Body() createCartDto : CreateCartDto) : Promise<Cart>{
        return await this.cartService.createCart(createCartDto);
    }
}