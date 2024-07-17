import { IsNotEmpty, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./CreateUser.dto";

// npm install @nestjs/mapped-types

export class UpdateUserDto extends PartialType(CreateUserDto) {} // dostaje wszystko CreateDto, ale ustawia wszystko na "opcjonalne"