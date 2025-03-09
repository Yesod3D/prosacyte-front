import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Manzanas Ecológicas',
      description: 'Cultivadas sin pesticidas ni químicos',
      price: 2.5,
      category: 'Frutas',
      imageUrl: 'https://example.com/manzanas.jpg'
    },
    {
      id: 2,
      name: 'Tomates de Invernadero',
      description: 'Tomates cultivados en invernadero natural',
      price: 1.8,
      category: 'Verduras',
      imageUrl: 'https://example.com/tomates.jpg'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}