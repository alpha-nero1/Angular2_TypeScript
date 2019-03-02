import { Component, OnInit } from "@angular/core";
import Character from "../models/Character";
import { DARK_SIDE, LIGHT_SIDE, ALL_SIDES } from "../utils/keys";
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
  chosen_side: string = ALL_SIDES;
  characters = [];
  swService: StarWarsService;

  /**
   * Dependancy injection.
   * @param swService
   */
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {}

  onChose(side: string) {
    this.chosen_side = side;
  }

  getCharacters() {
    return this.swService.getFilteredCharacters(this.chosen_side);
  }
}
