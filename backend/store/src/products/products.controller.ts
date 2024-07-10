import { 
    Body, 
    Controller, 
    Post, 
    Get,
    Put,
    Param,
    Res,
    HttpException,
    HttpStatus,
    Delete,
    Query,
    Req
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/CreateProduct.dto";
import { Product } from "src/schemas/product.schema";
import mongoose from "mongoose";

@Controller({})
export class ProductsController{

    constructor(private productsService : ProductsService) {}

    @Post('/product/insert')
    async createProduct(@Body() createProductDto : CreateProductDto): Promise<Product> { 
        return await this.productsService.createProduct(createProductDto);
    }

    @Get('/products')
    async getAllProducts(@Query() query, @Req() req : Request) {
        console.log(query);
        return await this.productsService.getAll({});
    }

    @Get('/products/:id')
    async getOneProduct(@Param('id') id : string ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid ID', 400);
        const findProd = await this.productsService.getOneProduct(id);
        if (!findProd) throw new HttpException('Product not found', 404);
        return findProd;
    }

    @Put('products/edit/:id')
    async updateByID(@Res() res, @Param('id') id : string, @Body() createProductDto : CreateProductDto) : Promise<Product> {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid ID', 400);
        const updateProduct = await this.productsService.updateByID(id, createProductDto);
        if (!updateProduct) throw new HttpException('Product not found', 404);
        return res.status(HttpStatus.OK).json({
            message : 'Post has been successfully updated',
            edit : updateProduct
        });
    }

    @Delete('products/delete/:id')
    async deleteByID(@Param('id') id : string) : Promise<any> {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid ID', 400);
        const deletedProduct = await this.productsService.deleteByID(id);
        if (!deletedProduct) throw new HttpException('Product not found', 404);
        return deletedProduct;
    }
}