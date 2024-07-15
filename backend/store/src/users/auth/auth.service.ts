import * as dotenv from 'dotenv';
dotenv.config();

import { Injectable } from "@nestjs/common";
import * as argon2 from 'argon2'; // npm install argon2
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users.service";
import { User } from "src/schemas/user.schema";

// npm install --save-dev @types/passport-local 
// npm install --save @nestjs/passport passport passport-local
// npm install --save @nestjs/jwt passport-jwt
// npm install --save-dev @types/passport-jwt
// npm install dotenv --save

@Injectable()
export class AuthService {

    constructor(private userServiecs : UsersService, private jwtService : JwtService) {}


    async hashPassword(password : string) : Promise<string> {
        return argon2.hash(password);
    }

    async validatePassword(storedPassword : string, password : string) : Promise<boolean> {
        return argon2.verify(storedPassword, password);
    }

    async validateUser(username : string, password : string) : Promise<User> {
        const user = await this.userServiecs.getUserByUsername(username);
        const validationResult = await this.validatePassword(user.password, password);
        if (user && validationResult) {
            return user;
        }
        return null;
    }

    async login(user: User) {
        const payload = { username: user.username, email: user.email };
        //const { username, email} = user;
        return {
            access_token : this.jwtService.sign(payload) // generuje JWT
        };
    }
}