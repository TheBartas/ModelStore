import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsNumber, ValidateNested } from "class-validator";
import { Product } from "src/schemas/product.schema";

// https://www.mongodb.com/docs/manual/tutorial/query-array-of-documents/




export class CreateProductCartDto {
    @IsNotEmpty()
    @IsNumber()
    prod_id : number;

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsNumber()
    quantity : number;
}




export class CreateCartDto {
    @IsNotEmpty()
    @IsString()
    customer_id : string;

    @ValidateNested({each : true})
    @Type(() => CreateProductCartDto)
    products : CreateProductCartDto[];
}