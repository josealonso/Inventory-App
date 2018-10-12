import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @Input() productList: Product[];
  /**
   * An EventEmitter is an object that helps you implement the Observer Pattern.
   * let ee = new EventEmitter();
   * ee.subscribe((name: string) => console.log(`Hello ${name}`));
   * ee.emit("Nate");
   * -> "Hello Nate"
   * When we assign an EventEmitter to an output Angular automatically subscribes for us.
   */
  @Output() onProductSelected: EventEmitter<Product>;  // In a view, we can listen to an event by using the (output)="action" syntax.
  private currentProduct: Product;  // It is a "local component state".

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
