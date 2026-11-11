import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
    @Get()
    getcategories() {
        return "This is a list of categories";
    }
}
