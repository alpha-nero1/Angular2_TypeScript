import { Component, OnInit } from "@angular/core";
import Character from "../models/Character";
import { DARK_SIDE, LIGHT_SIDE, ALL_SIDES } from "../utils/keys";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
  chosen_side: string = ALL_SIDES;

  characaters = [
    new Character("Luke Skywalker", ""),
    new Character("Darth Vader", "")
  ];
  constructor() {}

  ngOnInit() {}

  onChose(side: string) {
    this.chosen_side = side;
  }

  getFilteredCharacters() {
    if (this.chosen_side === ALL_SIDES) {
      return this.characaters.slice();
    }

    return this.characaters.filter(character => {
      return character.side === this.chosen_side;
    });
  }

  onSideAssigned(character) {
    const position = this.characaters.findIndex(char => {
      return char.name === character.name;
    });

    this.characaters[position].side = character.side;
  }
}
