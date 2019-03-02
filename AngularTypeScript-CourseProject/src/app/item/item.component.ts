import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Character from "../models/Character";
import { DARK_SIDE, LIGHT_SIDE, ALL_SIDES } from "../utils/keys";
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() character: Character;
  swService: StarWarsService;

  /**
   * Dependancy injection.
   * @param swService
   */
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {}

  onAssignSide(side: string) {
    this.swService.onSideAssigned({
      ...this.character,
      side
    });
  }
}
