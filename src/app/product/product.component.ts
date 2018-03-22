import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }
  //when product is succefully added this message will apear
  confirmationString:string = "New product has successfully been added";
  //item not added yet
  isAdded: boolean = false;
  productObj:object = {};

  //function that take in iput and add it to database
  addNewProduct = function(product) {
    this.productObj = {
      "name": product.name,
      "department": product.department,
      "price": product.price,
      "stock": product.stock
    }

    //item is added and posted to the page
    this.http.post("http://localhost:3000/products/", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
     
    })
  }

  ngOnInit() {
  }

}
