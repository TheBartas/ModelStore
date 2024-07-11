import { Body, Controller } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { User } from "src/schemas/user.schema";

@Controller({})
export class UserController {

    constructor(private usersService : UsersService, private authService : AuthService) {}

    @Post('/user/signup')
    async createUser(@Body() createUserDto : CreateUserDto) : Promise<User> {
        createUserDto.password = await this.authService.hashPassword(createUserDto.password);
        return await this.usersService.createUser(createUserDto);
    }


    s


}


// {
//     "username": "JanuszKowalski1987",
//     "email": "jankow@example.com",
//     "password": "2hhYrr"
// }