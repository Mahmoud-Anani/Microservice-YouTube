import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { UserCreatedEvent } from './user-event';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productService: ClientProxy
  ) { }
  // Get All Users
  getAllUsers() {
    return this.userService.send({ cmd: 'GET_ALL_USERS' }, {});
  }
  // Post User
  createUser(user: { name: string; email: string }) {
    this.userService.emit(
      'CREATE_USER',
      new UserCreatedEvent(user.name, user.email),
    );
  }

  // Get All Products
  getAllProducts() {
    return this.productService.send({ cmd: 'GET_ALL_PRODUCTS' }, {});
  }
  // Post Product
  createProduct(product: { name: string; price: number }) {
    this.productService.emit(
      'CREATE_PRODUCT',
      product,
    );
  }
}
