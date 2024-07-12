import { 
    Body, 
    Controller, 
    NotFoundException, 
    UnauthorizedException, 
    UseGuards} from "@nestjs/common";
import { Post, Request } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { User } from "src/schemas/user.schema";
import { LocalAuthGuard } from "./auth/local-auth.guard";


@Controller({})
export class UserController {

    constructor(private usersService : UsersService, private authService : AuthService) {}

    @Post('/user/signup')
    async createUser(@Body() createUserDto : CreateUserDto) : Promise<User> {
        createUserDto.password = await this.authService.hashPassword(createUserDto.password);
        return await this.usersService.createUser(createUserDto);
    }


    // @UseGuards(LocalAuthGuard)
    // @Post('user/login')
    // async checkUser(@Body() body : { username : string, password : string}) {
    //     const user = await this.usersService.getUserByUsername(body.username);
    //     if (!user) {
    //         throw new NotFoundException('User not found');
    //     }

    //     const validationResult = await this.authService.validatePassword(user.password, body.password);

    //     if (!validationResult) {
    //         throw new UnauthorizedException('Invalid credentials');
    //     }

    //     return this.authService.login(user);
    // }


    @UseGuards(LocalAuthGuard)
    @Post('user/login')
    async checkUser(@Request() req) {
        return await this.authService.login(req.user);
    }


    // @UseGuards(LocalAuthGuard)
    // @Post('user/login')
    // async checkUser(@Request() req) {
    //     return req.user;
    // }
}


// {
//     "username": "JanuszKowalski1987",
//     "email": "jankow@example.com",
//     "password": "2hhYrr"
// }