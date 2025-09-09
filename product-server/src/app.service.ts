import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private products = [];
  getHello(): string {
    return 'Hello World!';
  }

  getAllProducts() {
    return this.products;
  }

  createProduct(product: { name: string; price: number }) {
    this.products.push(product);
  }
}
