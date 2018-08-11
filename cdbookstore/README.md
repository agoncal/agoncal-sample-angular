# Cdbookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## How the project was created

Here are the commands and the steps that were used to create this project 

### Main application CDBookStore

#### NG CLI Commands

```
# Create a new Angular project with Angular CLI
$ ng new cdbookstore --directory cdbookstore --routing true --skip-tests true --inline-style true

# Add the needed dependencies
$ yarn add @fortawesome/fontawesome-free@5.2.0
$ yarn add jquery@3.3.1
$ yarn add bootstrap@4.1.3
$ yarn add @ng-bootstrap/ng-bootstrap@2.2.2
```

The main application has two components

```
$ ng generate component home --inline-style true --spec false
$ ng generate component about --inline-style true --spec false
```

#### Configuration

In `angular.json` file add :

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.css",
  "src/jumbotron.css",
  {
    "input": "src/styles.css"
  }
],
"scripts": [
  "node_modules/jquery/dist/jquery.slim.js",
  "node_modules/bootstrap/dist/js/bootstrap.bundle.js"
]
```

In `app.module.ts` add NG Bootstrap

```
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

  imports: [
    NgbModule.forRoot()
  ],
```


### Store Library

#### NG CLI Commands

```
# Create a new Angular library with Angular CLI
$ ng generate library store --prefix str
$ ng generate component store --project store --inline-style true

# Add the needed dependencies
$ yarn add @fortawesome/fontawesome-free@5.2.0
$ yarn add jquery@3.3.1
$ yarn add bootstrap@4.1.3
$ yarn add @ng-bootstrap/ng-bootstrap@2.2.2
```

Build the library so you can use it

```
$ ng build store
```

### Inventory Library

#### NG CLI Commands

```
# Create a new Angular library with Angular CLI
$ ng generate library inventory --prefix inv
```

Build the library so you can use it

```
$ ng build inventory
```

### Number Generator Library

#### NG CLI Commands

```
# Create a new Angular library with Angular CLI
$ ng generate library generator --prefix gen
```

The Generator Library has three components

```
$ ng generate component BookNumber --project generator --inline-style true --spec false
$ ng generate component CDNumber --project generator --inline-style true --spec false
$ ng generate component DVDNumber --project generator --inline-style true --spec false
```

Build the library so you can use it

```
$ ng build generator
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## References

* [How to build a library for Angular apps?](https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11)
* [BOOTSTRAP SIDEBAR](https://bootstrapious.com/p/bootstrap-sidebar)
