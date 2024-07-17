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
import { UpdateUserDto } from "./dto/update.user.dto";
import { ChangePasswordDto } from "./dto/change.password.dto";


@Controller('user')
export class UserController {

    constructor(private usersService : UsersService, private authService : AuthService) {}

    @Post('signup')
    async createUser(@Body() createUserDto : CreateUserDto) : Promise<User> {
        createUserDto.password = await this.authService.hashPassword(createUserDto.password);
        return await this.usersService.createUser(createUserDto);
    }


    @Put('update-password')
    async updatePassword(@Body() changePasswordDto : ChangePasswordDto, @Request() req) {
        const payload : string = req.headers['authorization'].split(' ')[1];
        const userPayload = await this.authService.decodeToken(payload);
        const user = await this.usersService.getUserByUsername(userPayload.username);
        const validatePassword = await this.authService.validatePassword(user.password, changePasswordDto.oldPassword);

        if (!validatePassword) throw new UnauthorizedException('Invalid old password!');

        const updateUser : UpdateUserDto = new UpdateUserDto();
        updateUser.password = await this.authService.hashPassword(changePasswordDto.newPassword);
        
        return await this.usersService.updatePassword(user.username, updateUser);
    }

}
// {
    // "username": "JanuszKowalski1987",
    // "email": "jankow@example.com",
    // "password": "2hhYrr" / 2hhYrrr
// }