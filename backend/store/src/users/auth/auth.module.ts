import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../users.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";


@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions : { expiresIn: '15h'},
        }),
    ],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService]
})

export class AuthModule {}