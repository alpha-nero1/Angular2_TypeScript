# Angular2_TypeScript

This project follows the Udemy course by Maximilian Schwarzmüller: https://www.udemy.com/angular-essentials-angular-2-angular-4-with-typescript/

Application uses the Angular cli, attainable here: https://cli.angular.io/

### Usefull Extensions

1. Angular Essentials https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials

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
4. `index.html` is the single page we are seeing in the endpoint. the cli injects script imports at
   runtime
5. `main.ts` includes the first code to be run and runs the Angular app.

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
