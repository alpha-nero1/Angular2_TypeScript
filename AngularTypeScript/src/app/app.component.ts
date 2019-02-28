import { Component } from "@angular/core";

/***
 * * Declarator component will always refer to what comes after it
 * it defines what the selector (DOM element) of the component is,
 * what template url it uses and what style template it uses.
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

/***
 * * The component will define properties and methods
 * * to be used within the component.
 */
export class AppComponent {
  title = "AngularTypeScript";
  root_name = "Alessandro";
  root_items = ["Apples", "Bananas", "Cherries"];

  onNameChanged(new_name) {
    this.root_name = new_name;
  }

  onItemWasAdded(value) {
    this.root_items.push(value);
    console.log(this.root_items);
  }
}
