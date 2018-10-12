import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';

// Angular provides a module system that helps organize our code. Unlike AngularJS 1.x, where all directives are essentially globals.
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDepartmentComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
