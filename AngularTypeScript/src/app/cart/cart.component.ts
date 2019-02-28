import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  @Input() items = [];

  // * Event emitters must be used so that wrapping components can listen on functions/triggers
  // * internal to the nested component
  @Output() itemAdded = new EventEmitter<string>();
  current_item: string;

  constructor() {}

  ngOnInit() {}

  addItem() {
    this.itemAdded.emit(this.current_item);
  }
}
