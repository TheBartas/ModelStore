import { 
    Controller, 
    Get, 
    Post, 
    Req, 
    Param,
    HttpCode
} from '@nestjs/common';
@Controller({})

export class AppController {
    // @Get()
    // getUser(){
    //     return { name: "Bartek", country: "Poland"};
    // }
    @Post()
    store(@Req() req: Request) {
        return req.body;
    }

    @Get('/:userId')
    getUser(@Param() userId: number) {
        return userId;
    }


    @Get('/models')
    @HttpCode(200)
    getModels(@Req() req: Request) {
        return req.body;
    }
}