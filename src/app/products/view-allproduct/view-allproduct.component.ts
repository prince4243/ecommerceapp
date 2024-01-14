import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-allproduct',
  templateUrl: './view-allproduct.component.html',
  styleUrl: './view-allproduct.component.css'
})
export class ViewAllproductComponent implements OnInit {

  productList!: Product;
  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.productService.Viewproduct().subscribe(data =>{
      this.productList =data;
    })

  }

}
