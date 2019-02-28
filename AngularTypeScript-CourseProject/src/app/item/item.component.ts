import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Character from "../models/Character";
import { DARK_SIDE, LIGHT_SIDE, ALL_SIDES } from "../utils/keys";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() character: Character;
  @Output() sideAssigned = new EventEmitter<Character>();

  constructor() {}

  ngOnInit() {}

  onAssignSide(side: string) {
    this.sideAssigned.emit({
      ...this.character,
      side
    });
  }
}
