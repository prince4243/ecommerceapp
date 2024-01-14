import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAllproductComponent } from './view-allproduct/view-allproduct.component';
import { ViewproductbycategoryComponent } from './viewproductbycategory/viewproductbycategory.component';
import { ViewproductbydateComponent } from './viewproductbydate/viewproductbydate.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ViewAllproductComponent},
  {path:'add-product',component:AddProductComponent},
 // {path:'list-product',component:ViewAllproductComponent},
  {path:'search-cat',component:ViewproductbycategoryComponent},
  {path:'search-date',component:ViewproductbydateComponent},
  {path:'delete-product',component:DeleteProductComponent},
  {path:'view-product/:id',component:ViewproductComponent},
  {path:'update-product/:id',component:UpdateProductComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
