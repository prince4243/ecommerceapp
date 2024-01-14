import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllproductComponent } from './view-allproduct/view-allproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewproductbydateComponent } from './viewproductbydate/viewproductbydate.component';
import { ViewproductbycategoryComponent } from './viewproductbycategory/viewproductbycategory.component';






@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllproductComponent,
    ViewproductComponent,
    ViewproductbydateComponent,
    ViewproductbycategoryComponent,
  
    

    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
