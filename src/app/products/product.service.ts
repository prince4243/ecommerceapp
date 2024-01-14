import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product}from './product';
import {from, Observable } from 'rxjs';
import { Category } from '../site-layout/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  createroduct(productBody: any):Observable<Product>{
   const  baseUrl="http://localhost:3000/products";
   return this.httpClient.post<Product>(baseUrl,productBody)
  }
  
   Viewproduct():Observable<Product>{
    const  baseUrl="http://localhost:3000/product/";
    return this.httpClient.get<Product>(baseUrl)
  }
   updateproduct(productId: string):Observable<Product>{
    const  baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.put<Product>(baseUrl,productId)
  }
   deleteproduct(productId: string):Observable<Product>{
    const  baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.delete<Product>(baseUrl)
  }
  searchCategoryproduct(categoryID: string):Observable<Product>{
    const  baseUrl="http://localhost:3000/product/category="+categoryID;
    return this.httpClient.get<Product>(baseUrl)
  }
  searchDateproduct(dateParam: string):Observable<Product>{
    const  baseUrl="http://localhost:3000/product/date="+dateParam;
    return this.httpClient.get<Product>(baseUrl)
  }
  getCategory(){
    const  categoryUrl="http://localhost:3000/categories"
    
    return this.httpClient.get< Category>(categoryUrl)
  }
}
