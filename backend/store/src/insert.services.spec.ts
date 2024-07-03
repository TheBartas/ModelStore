import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products/products.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { log, error } from "console"

describe('InsertController test version 1.0', ()=> {
    let service : ProductsService;

    const mockProductService = {
        getOneProduct : jest.fn(),
        createProduct : jest.fn(),
        updateByID : jest.fn(),
        deleteByID : jest.fn(),
        getAll : jest.fn()
    };

    const mockProduct = {
        _id: "6683a86a4a8dc7885b9f664f",
        prod_id: 1,
        name: "T-34/76",
        scale: "1/72",
        price: 100.46,
        __v: 0
    }

    const mockProductInsert = {
        prod_id: 34,
        name: "Crusader",
        scale: "1/72",
        price: 76.46,
    }


    beforeEach(async () => {
        const module : TestingModule = await Test.createTestingModule({
            imports: [MongooseModule.forRoot('mongodb+srv://admin:TQqeEBOLLiW23a1K@cluster0.dy18fka.mongodb.net/?appName=Cluster0'), MongooseModule.forFeature([{ name : Product.name, schema : ProductSchema}])],
            providers : [ProductsService, {
                provide : getModelToken(Product.name),
                useValue : mockProductService,
            }]
        }).compile();

        service = module.get(ProductsService);
    });


    it('Should be defined ', () => {
        expect(service).toBeDefined();
    });


    describe('create product', ()=>{
        it('shoud add one product', async ()=>{
            const createOneSpy = jest.spyOn(service, 'createProduct').mockResolvedValue(mockProductInsert);
            const result = await service.createProduct(mockProductInsert);
            expect(createOneSpy).toHaveBeenCalledWith(mockProductInsert);
            expect(result).toEqual(mockProductInsert);
            expect(result).toHaveProperty('name');
            expect(result).toHaveProperty('prod_id');
            expect(result).toHaveProperty('scale');
            expect(result).toHaveProperty('price');
            expect(result.name).toBe('Crusader');
            expect(result.price).toBeInstanceOf;
        });
    });

    describe('get products', ()=> {
        it('should find and return product by ID', async ()=>{
            const findOneSpy = jest.spyOn(service, 'getOneProduct').mockResolvedValue(mockProduct);
            const result = await service.getOneProduct(mockProduct._id);
            expect(findOneSpy).toHaveBeenCalledWith(mockProduct._id);
            expect(result).toEqual(mockProduct);
            expect(result.name).toEqual('T-34/76');
        });


        it('should return all records', async () => {
            const exampleDB = [
                {
                    "_id": "6683a86a4a8dc7885b9f664f",
                    "prod_id": 1,
                    "name": "T-34/76",
                    "scale": "1/72",
                    "price": 100.46,
                },
                {
                    "_id": "6683a963d56de3bfdebd254a",
                    "prod_id": 45001,
                    "name": "M4",
                    "scale": "1/35",
                    "price": 99.5,
                },
                {
                    "_id": "6683acb0f3623856e89cd74b",
                    "prod_id": 991,
                    "name": "German Soldier Pack",
                    "scale": "1/35",
                    "price": 50.5,
                },
                {
                    "_id": "668525b7ee856a9753ef993d",
                    "prod_id": 65,
                    "name": "T-28 Medium Tank",
                    "scale": "1/35",
                    "price": 101.34,
                }
            ]
            jest.spyOn(service, 'getAll').mockResolvedValue(exampleDB);
            const result = await service.getAll();


            expect(result.length).toBe(exampleDB.length);
            result.forEach((obj) => {
                expect(obj).toHaveProperty('prod_id');
                expect(obj).toHaveProperty('name');
                expect(obj).toHaveProperty('scale');
                expect(obj).toHaveProperty('price');
            })
            
        });

    });

    describe('get and update', ()=> {
        it('should find and update product by ID', async ()=>{

            const mockProductUpdate = {
                prod_id: 65,
                name: "T-28 Medium Tank",
                scale: "1/35",
                price: 78.90,
            }

            const key : string = '668525b7ee856a9753ef993d';
            const updateSpy = jest.spyOn(service, 'updateByID').mockResolvedValue(mockProductUpdate);
            const result = await service.updateByID(key, mockProductUpdate);
            expect(updateSpy).toHaveBeenCalledWith(key, mockProductUpdate);
            expect(result.name).toEqual(mockProductUpdate.name);
            expect(result.price).toBe(mockProductUpdate.price);
        });
    });


    describe('delete product', ()=> {
        it('should delete and return product by ID', async () => {
            const mockProductDelete = {
                _id: "668525b7ee856a9753ef993d",
                prod_id: 65,
                name: "T-28 Medium Tank",
                scale: "1/35",
                price: 78.90,
            }

            const deleteSpy = jest.spyOn(service, 'deleteByID').mockResolvedValue(mockProductDelete);
            const result = await service.deleteByID(mockProductDelete._id);
            expect(deleteSpy).toHaveBeenCalledWith(mockProductDelete._id);
            expect(result).toEqual(mockProductDelete);
        });
    });

})



