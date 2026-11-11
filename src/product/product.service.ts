import { Injectable } from '@nestjs/common';
import { get } from 'http';

@Injectable()
export class ProductService {
    constructor(private readonly productService: ProductService) {}

    getProducts() {
        return "This is a list of products";
    }

    createProduct(body: any) {
        return {"This is a new product": true, product:body};
    }

    updateProduct(body: any) {
        return {"This is an updated product": true, product:body};
    }

    deleteProduct(body: any) {
        return {"This is a deleted product": true, product:body};
    }

}