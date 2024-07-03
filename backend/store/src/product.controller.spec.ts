import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductsService } from './products/products.service';


describe('Controller test', () => {
    let controller : ProductsController;

    beforeEach(async () => {
        const module : TestingModule = await Test.createTestingModule({
            imports : [MongooseModule.forRoot('mongodb+srv://admin:TQqeEBOLLiW23a1K@cluster0.dy18fka.mongodb.net/?appName=Cluster0'), MongooseModule.forFeature([{ name : Product.name, schema : ProductSchema}])],
            controllers : [ProductsController],
            providers : [ProductsService],
        }).compile();

        controller = module.get(ProductsController);
    });

    it('Should be defined', () => {
        expect(controller).toBeDefined();
    });
})