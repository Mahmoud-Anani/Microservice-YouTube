import { Controller } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'GET_ALL_PRODUCTS' })
  getAllProducts() {
    return this.appService.getAllProducts();
  }

  @EventPattern('CREATE_PRODUCT')
  createProduct(product: { name: string; price: number }) {
    return this.appService.createProduct(product);
  }
}
