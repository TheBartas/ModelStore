import { Injectable } from "@nestjs/common";
import * as argon2 from 'argon2'; // npm install argon2



@Injectable()
export class AuthService {
    async hashPassword(password : string) : Promise<string> {
        return argon2.hash(password);
    }
}