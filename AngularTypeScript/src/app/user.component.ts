import { Component } from "@angular/core";

/***
 * * $event is a reserved name to retrieve the event of an input.
 * * [] notation binds the value property to the value property
 * * one way binding: (input)="onUserInput($event)" [value]="name"
 * directives are instructions we place in our templates
 */
@Component({
  selector: "app-user",
  template: `
    <input type="text" [(ngModel)]="name" />
    <p>Hello!</p>
    <p [textContent]="name"></p>
  `
})
export class UserComponent {
  name = "Ale";

  onUserInput(event) {
    this.name = event.target.value;
  }
}
