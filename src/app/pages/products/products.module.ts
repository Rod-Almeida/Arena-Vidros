import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class ProductsModule { }
