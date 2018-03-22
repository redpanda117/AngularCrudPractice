# AngularCrudPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

Also used the npm json-server.
website the npm is located:
https://www.npmjs.com/package/json-server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

For products be desplay you must create a products.json file. Created a json array of at least one product. For example,
{
  "products": [
    {
      "id": 1,
      "name": "t-shirt",
      "department": "Clothing",
      "price": "5.00",
      "stock": "100"
    }
  ]
}
I have created one out side of the angula folder. 
Run json-server --watch products.json. You must have this server running at the same time as the angular server is runing becuase if not the data wwill not display. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
