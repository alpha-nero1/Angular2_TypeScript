# Angular2_TypeScript

This project follows the Udemy course by Maximilian Schwarzmüller: https://www.udemy.com/angular-essentials-angular-2-angular-4-with-typescript/

application used the Angular cli, here: https://cli.angular.io/

### Usefull Extensions

1. Angular Essentials https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials

## Running the project

1. in `/AngularTypeScript` run `ng serve`

## How Angular works

### The Project Structure

in `src/app/` is where the actual angular application is built.
`/e2e` is where we declare end to end tests.
`src/environment` allows us to manage environment variables.

Note in `src/index.html` we have

```
<body>
  <app-root></app-root>
</body>
```

`main.ts` is responsible for starting the angular app.

however in the root we have several astranged config files:

1. `.editorconfig` declares how project is displayed in editor
2. `tsconfig.js` configures the TS compiler
3. `tslint.json` configures linting

### index.html

This is the single page we are seeing in the endpoint. the cli injects script imports at
runtime

### main.ts

Includes the first code to be run and runs the Angular app.

### Components
