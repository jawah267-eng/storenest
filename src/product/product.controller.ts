import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service.js';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getproducts() {
        return this.productService.getProducts();
    }
    @Post()
    createProduct(@Body() body: any) {
        return this.productService.createProduct(body);
    }
    @Patch()
    updateProduct(@Body() body: any) {
        return this.productService.updateProduct(body);
    }
    @Delete()
    deleteProduct(@Body() body: any) {
        return this.productService.deleteProduct(body);
    }
}
