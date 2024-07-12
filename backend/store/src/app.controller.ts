import { 
    Controller, 
    Post, 
    Request, 
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './users/auth/local-auth.guard';
import { AuthService } from './users/auth/auth.service';
@Controller({})

export class AppController {

    constructor(private authService : AuthService) {}
    @UseGuards(LocalAuthGuard)
    @Post('user/login')
    async checkUser(@Request() req) : Promise<{}> {
        return this.authService.login(req.user);
    }
  
}