import Character from "./models/Character";
import { DARK_SIDE, LIGHT_SIDE, ALL_SIDES } from "./utils/keys";
import { LogService } from "./log.service";
import { Injectable } from "@angular/core";

@Injectable()
export class StarWarsService {
  private characters = [
    new Character("Luke Skywalker", ""),
    new Character("Darth Vader", "")
  ];

  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getFilteredCharacters(chosen_side) {
    if (chosen_side === ALL_SIDES) {
      return this.characters.slice();
    }

    return this.characters.filter(character => {
      return character.side === chosen_side;
    });
  }

  onSideAssigned(character: Character) {
    const position = this.characters.findIndex(char => {
      return char.name === character.name;
    });

    this.characters[position].side = character.side;
    this.logService.writeLog(
      `Changed side of ${character.name} to ${character.side}`
    );
  }

  addCharacter(character) {
    const position = this.characters.findIndex(char => {
      return char.name === character.name;
    });

    if (position !== -1) {
      return;
    }

    const newCharacter = new Character(character.name, character.side);
    this.characters.push(newCharacter);
  }
}
