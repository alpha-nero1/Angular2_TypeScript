import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Character from "../models/Character";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() characters = [];
  @Output() sideAssigned = new EventEmitter<Character>();

  constructor() {}

  ngOnInit() {}

  onSideAssigned(character) {
    this.sideAssigned.emit(character);
  }
}
