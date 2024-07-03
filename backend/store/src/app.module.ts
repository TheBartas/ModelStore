import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';


@Module({
    //controllers : [AppController],
    imports: [MongooseModule.forRoot('mongodb+srv://admin:TQqeEBOLLiW23a1K@cluster0.dy18fka.mongodb.net/?appName=Cluster0'),
        ProductsModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule { };