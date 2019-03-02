import { Component, OnInit } from "@angular/core";
import { DARK_SIDE, LIGHT_SIDE, ALL_SIDES } from "../utils/keys";
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.css"]
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: "None", value: ALL_SIDES },
    { display: "Dark", value: DARK_SIDE },
    { display: "Light", value: LIGHT_SIDE }
  ];

  swService: StarWarsService;
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {}

  onSubmit(formData) {
    if (formData.invalid) {
      return;
    }

    const { value } = formData;

    this.swService.addCharacter(value);
  }
}
