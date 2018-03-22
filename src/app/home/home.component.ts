import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }

  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});

  products = [];
  fetchData = function() {
    this.http.get("http://localhost:3000/products").subscribe(
      (res: Response) => {
        this.products = res.json();

      }
    )
  }
//ngOnInit is a function that is automatically call when every this view is initilize
  ngOnInit() {
    this.fetchData();
  }

}
