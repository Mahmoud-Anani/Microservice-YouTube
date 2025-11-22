import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('users')
  getAllUsers() {
    return this.appService.getAllUsers();
  }


  @Post('users')
  createUsers(@Body() user: { name: string; email: string }) {
    return this.appService.createUser(user);
  }

  @Get('products')
  getAllProducts() {
    return this.appService.getAllProducts();
  }

  @Post('products')
  createProduct(@Body() product: { name: string; price: number }) {
    return this.appService.createProduct(product);
  }
}
