import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "../schemas/product.schema";
import { CreateProductDto } from "./dto/CreateProduct.dto";

import { log, error } from "console";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel : Model<Product>) {}

    async createProduct(createProductDto : CreateProductDto) : Promise<Product> { 
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async getAll() : Promise<Product[]> {
        return await this.productModel.find();
    }

    async getOneProduct(id : string) : Promise<Product> {
        return await this.productModel.findById(id).exec();
    }

    async updateByID(id : string, createdProductDto : CreateProductDto) : Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, createdProductDto, { new : true });
    }

    async deleteByID(id : string) : Promise<Product> {
        return await this.productModel.findByIdAndDelete(id);
    }
}