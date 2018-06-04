# EnginePersonalBank a Starter for Angular 6

This app is a starter for Angular 6 and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.


### Technologies
----------------
* [Angular](https://angular.io//)
* [Material Angular](https://material.angular.i)
* [https://firebase.google.com](Firebase, (Realtime Database && Cloud Database Beta))
* [Sass](https://sass-lang.com/)
* [Npm](https://www.npmjs.com/)

### Structure Folders

[![Structure Design Folders](https://mat-bank-engine.firebaseapp.com/assets/img/structure_draw.png)](https://mat-bank-engine.firebaseapp.com/assets/img/structure_draw.png)


The firebase is my choice for the db data, if you do not need it, just do not use it. 

## Development server

Run `npm install` for install all packages and  `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


## Setup Firebase Credentials

If you are unfamiliar with firebase go to [Documentation Firebase](https://firebase.google.com/docs/web/setup).

Before use the app you must update the credentials on `src/environments/environment.ts` and `src/environments/environment.prod.ts` 

```js
    export const environment = {
        production: false,
        firebase: {
            apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            authDomain: "appname.firebaseapp.com",
            databaseURL: "https://appname.firebaseio.com",
            projectId: "projectid",
            storageBucket: "xxxxxxxxxxxxxxxxxxxx",
            messagingSenderId: "xxxxxxxxxxxxxxx"
        }
    };
```

If you have any suggestions you are welcome :)

Thank You.