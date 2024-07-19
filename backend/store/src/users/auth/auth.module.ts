import { MiddlewareConsumer, Module, NestModule, Req, RequestMethod } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../users.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from "./auth.controller";
import { AccessTokenMiddleware } from "src/middleware/token.middleware";

//https://www.elvisduru.com/blog/nestjs-jwt-authentication-refresh-token

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.SECRET_KEY,
            signOptions : { expiresIn: '24h'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService, JwtModule]
})

export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AccessTokenMiddleware).forRoutes(
                {path : 'products', method : RequestMethod.GET}, 
                {path : 'products/:id', method : RequestMethod.GET},
                {path : 'product/insert', method : RequestMethod.POST},
                {path : 'products/edit/:id', method : RequestMethod.PUT},
                {path : 'products/delete/:id', method : RequestMethod.DELETE},
                {path : 'cart/products-in-cart', method : RequestMethod.GET},
                {path : 'cart/add-product', method : RequestMethod.POST},
                {path : 'cart/delete-product', method : RequestMethod.DELETE},
                {path : 'cart/add-product/quantity', method : RequestMethod.PUT},
                {path : 'cart/delete-quantity', method : RequestMethod.PUT},
                {path : 'user/update-password', method : RequestMethod.PUT}
            )

    }
}