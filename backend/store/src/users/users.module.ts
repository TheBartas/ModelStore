import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema} from "src/schemas/user.schema";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthService } from "./auth/auth.service";


@Module({
    imports: [MongooseModule.forFeature([{ name : User.name, schema : UserSchema}])],
    providers: [UsersService, AuthService],
    controllers: [UserController]
})

export class UsersModule {}