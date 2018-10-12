import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

// This decorator configures how the outside world will interact with the component.
@Component({
  selector: 'inventory-app-root',
  /* template: `
  <div class="inventory-app">
  </div>
  ` */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];  // or products: Array<Product>;
  
  constructor() {
    this.products = [
    new Product(
      'NICEHAT',
      'A Nice Black Hat',
      'src/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99),
    new Product(
      'JACKET',
      'Blue Jacket',
      '/assets/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      8.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}