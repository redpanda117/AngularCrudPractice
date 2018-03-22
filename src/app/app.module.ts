import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,   
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "product", component: ProductComponent},
      {path: "productUpdate/:id", component: ProductUpdateComponent}

    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
