import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  template: `
  <div class="mt-5 ml-5 text-center">
    <img class="product-image rounded-circle" [src]="product.imageUrl">
  </div>
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'small image';

  constructor() { }

}
