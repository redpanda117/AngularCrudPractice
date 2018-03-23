import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id:number;
  data:object = {};
  products = [];
  exist = false;
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  
  updateProduct(product) {
    this.productObj = {
      "name": product.name,
      "department": product.department,
      "price": product.price,
      "stock": product.stock
    }
    const url = `${"http://localhost:3000/products"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

  //will show the data of the product that was click when the page first load
  ngOnInit() {
    //grab the id from url
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    //fetching the data
    this.http.get("http://localhost:3000/products").subscribe(
      (res: Response) => {
        this.products = res.json();
      //loop through the products to find the matching id  
        for(var i = 0; i < this.products.length; i++){
          if(parseInt(this.products[i].id) === this.id){
            this.data = this.products[i];
            this.exist = true;
            break;
          }else{
            this.exist = false;
          }    
        }
      }
    )
  }

}
