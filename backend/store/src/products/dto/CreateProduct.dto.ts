import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsNumber()
    prod_id : number;

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsString()
    scale : string;

    @IsNotEmpty()
    @IsNumber()
    price : number;
}