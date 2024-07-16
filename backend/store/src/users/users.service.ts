import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/CreateUser.dto";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel : Model<User>) {}

    async createUser(createUserDto : CreateUserDto) : Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async getUserByUsername(username : string) : Promise<User> {
        return await this.userModel.findOne({username : username});
    }

    async updatePassword(password : string, username : string) {
        return await this.userModel.findOneAndUpdate({ })
    }

}