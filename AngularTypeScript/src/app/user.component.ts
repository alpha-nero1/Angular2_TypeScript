import { Component, Input, Output, EventEmitter } from "@angular/core";

/***
 * * $event is a reserved name to retrieve the event of an input.
 * * [] notation binds the value property to the value property
 * * one way binding: (input)="onUserInput($event)" [value]="name"
 *     <input type="text" [(ngModel)]="name" />
 * directives are instructions we place in our templates
 */
@Component({
  selector: "app-user",
  template: `
    <p>Hello!</p>
    <input type="text" [(ngModel)]="name" />
    <p [textContent]="name"></p>
    <button class="btn btn-primary">nothig</button>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name: String;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    this.nameChanged.emit(event.target);
  }
}
