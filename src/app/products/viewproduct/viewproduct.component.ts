import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements  OnInit {
  productID=0;
  
  constructor(private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productID =data['id'];

    })
      
  }

}
