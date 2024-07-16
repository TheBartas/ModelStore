import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction } from "express";
import { request } from "http";



@Injectable() 
export class AccessTokenMiddleware {
    constructor(private readonly jwtService : JwtService) {}
    async use(req : Request, res : Response, next : NextFunction) {
        const header = req.headers['authorization'];
        if (!header) return next(new UnauthorizedException('Bearer token not found!'));
        const bearerToken = header.split(' ')[1];

        try {
            const payload = await this.jwtService.verifyAsync(bearerToken, {
                secret : process.env.SECRET_KEY,
            });
            request['user'] = payload;
            next();
        } catch {
            throw new UnauthorizedException('Invalid bearer token!');
        }
        // next();
    }
}