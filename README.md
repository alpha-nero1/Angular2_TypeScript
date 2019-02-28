# Angular2_TypeScript

This project follows the Udemy course by Maximilian Schwarzmüller: https://www.udemy.com/angular-essentials-angular-2-angular-4-with-typescript/

Application uses the Angular cli, attainable here: https://cli.angular.io/

### Usefull Extensions

1. Angular Essentials https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials
2. Augury Chrome Extension https://augury.rangle.io/

## Running the project

1. in `/AngularTypeScript` run `ng serve`

## How Angular works

### The Project Structure

in `src/app/` is where the actual angular application is built.
`/e2e` is where we declare end to end tests.
`src/environment` allows us to manage environment variables.

however in the root we have several astranged config files:

1. `.editorconfig` declares how project is displayed in editor
2. `tsconfig.js` configures the TS compiler
3. `tslint.json` configures linting

In addition to two crucial project files:

1. `index.html` is the single page we are seeing in the endpoint. the cli injects script imports at
   runtime
2. `main.ts` includes the first code to be run and runs the Angular app.

### Components

A very basic component will look as such. This is an example of the vanilla
`app.component.ts` file that houses the main component.

Note that each component class is preceeded with an `@Component()` function. These
are called declerators and they specify:

1. what the DOM selector for the component will be
2. what html template will be served in substitution for the selector.
3. what style the template will use

The following class (note the absence of a `;` between @component and AppComponent)
then houses all the logic for the template. In the below example the class properties
`title` and `name` can be used as dynamic variables within the template.
e.g `<p [textContent]="name"></p>` or `<p>{{ name }}</p>`

`app.component.ts`

```JavaScript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "AngularTypeScript";
  name = "Alessandro"
}
```

### Adding and using the component

Following our example because we have made our AppComponent class with a declarator and in
`app.module.ts` it has been imported and added to the list of modules:

```JavaScript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
```

We can then use our selector `app-root` that we defined earlier in `app.component.ts` to inject our
component into our Angular application.

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>AngularTypeScript</title>
    <base href="/" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

### Adding a component via the CLI

The angular CLI ships with a generate script that automatically creates components and adds them not only as new folders in the app directory but adds them to the component array in `app.module.ts`

To create a new component run: `ng generate component <component_name>` or the shorthand: `ng g c`

## Directives

Directives are logic that exist within angular templates to make the front end dynamic and
interactive. Components themselves are directives however there are two types of
directives that may be defined within templates...

### Structural Directives

Structural directives are named as such because they change the structure of the DOM. they are
preceeded by an \*. `ngFor` is the angular directive to create list content (Using an array in the
component).

```html
<ul class="list-group">
  <li class="list-group-item" *ngFor="let item of items">{{ item }}</li>
</ul>
```

### Unstructural Directives

Unstructural directives however change the value of DOM elements (style, numeric etc.). The below
ngClass directive accepts an object and applies different styles according to specified logic.

```html
<button
  (click)="addItem($event)"
  class="btn"
  [ngClass]="{
    'btn-primary': current_item !== '',
    'btn-default': current_item === ''
     }"
>
  Add Item
</button>
```

#### Further Logic

Another directive that can be used is ngStyle, note that you may use ternary operators
to assign values according to conditions.

```html
<li
  class="list-group-item"
  *ngFor="let item of items; let i = index"
  [ngStyle]="{
      'background-color': i % 2 === 0 ? 'yellow' : 'blue'
    }"
>
  {{ item }}
</li>
```
