import { 
    Body, 
    Controller,
    Put,
    UnauthorizedException, 
    Res,
    HttpStatus
} from "@nestjs/common";
import { Post, Request } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { User } from "src/schemas/user.schema";
import { ChangePasswordDto } from "./dto/change.password.dto";
import { request } from "http";


@Controller('user')
export class UserController {

    constructor(private usersService : UsersService, private authService : AuthService) {}

    @Post('signup')
    async createUser(@Body() createUserDto : CreateUserDto) : Promise<User> {
        createUserDto.password = await this.authService.hashPassword(createUserDto.password);
        return await this.usersService.createUser(createUserDto);
    }


    @Put('update-password')
    async changePassword(@Body() changePasswordDto : ChangePasswordDto, @Request() req) {
        const payload : string= req.headers['authorization'].split(' ')[1];
        try {
            const result = await this.authService.decodeToken(payload);
            const user = (await this.usersService.getUserByUsername(result.username)).password;
            const validatePassword = await this.authService.validatePassword(user, changePasswordDto.password);
            if (!validatePassword) throw new UnauthorizedException('Invalid password!');
            const hashedNewPassword = await this.authService.hashPassword(changePasswordDto.newPassword);
            
        } catch {

        }
    }

}
// {
//     "username": "JanuszKowalski1987",
//     "email": "jankow@example.com",
//     "password": "2hhYrr"
// }