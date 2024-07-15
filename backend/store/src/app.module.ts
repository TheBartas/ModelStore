import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './users/auth/auth.module';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://admin:TQqeEBOLLiW23a1K@cluster0.dy18fka.mongodb.net/?appName=Cluster0'),
        ProductsModule, UsersModule, AuthModule
    ],
    controllers: [],
    providers: []
})

export class AppModule { };