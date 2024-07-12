import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema} from "src/schemas/user.schema";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthService } from "./auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./auth/local.strategy";



@Module({
    imports: [MongooseModule.forFeature([{ name : User.name, schema : UserSchema}]), PassportModule],
    providers: [UsersService, AuthService, JwtService, LocalStrategy],
    controllers: [UserController],
    exports: [UsersService] 
})

export class UsersModule {}