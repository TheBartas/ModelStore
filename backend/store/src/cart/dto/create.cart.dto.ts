import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { Product } from "src/schemas/product.schema";

// https://www.mongodb.com/docs/manual/tutorial/query-array-of-documents/

export class CreateCartDto {
    @IsNotEmpty()
    @IsNumber()
    prod_id : number;

    
    products : Product[];
}