import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class User extends Document{
    @Prop({required : true})
    username : string;

    @Prop({required : true})
    email : string;

    @Prop({required : true})
    password : string;

    _id: MongooseSchema.Types.ObjectId;
}


export const UserSchema = SchemaFactory.createForClass(User);