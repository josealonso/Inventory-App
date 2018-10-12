import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  template: `
  <div>
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
