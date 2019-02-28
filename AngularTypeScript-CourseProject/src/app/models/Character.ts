/**
 * * A model to manage the characters
 */
export default class Character {
  name: string;
  side: string;

  constructor(name: string, side: string) {
    this.name = name;
    this.side = side;
  }
}
