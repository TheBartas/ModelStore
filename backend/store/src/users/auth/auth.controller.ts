import { 
    Controller, 
    Post, 
    Get,
    Request, 
    UseGuards, 
    Put} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { User } from "src/schemas/user.schema";





@Controller('user')
export class AuthController {
    constructor(private authService : AuthService) {}
    

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async checkUser(@Request() req) : Promise<{ access_token: string }> {
        return await this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async getProfile(@Request() req) : Promise<User>{
        return req.user;
    }
}