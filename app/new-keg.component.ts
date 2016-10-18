import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: "new-keg",
  template:`
  <div id="keg-form">
    <h2 class="subheader">New Keg:</h2>
    <input class="input" #brand placeholder="Brand">
    <input class="input" #name placeholder="Name">
    <input class="input" #type placeholder="Type">
    <input class="input" #bitterness placeholder="Bitterness">
    <input class="input" #alcohol placeholder="Alcohol Content">
    <input class="input" #price placeholder="Price">
  </div>
  <div>
  <button class="button" (click)=
  "addNewKeg(brand.value, name.value, type.value, bitterness.value, alcohol.value, price.value);
  brand.value = '';
  name.value = '';
  type.value = '';
  bitterness.value = '';
  alcohol.value = '';
  price.value = '';
  ">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addNewKeg(brand: string, name: string, type: string, bitterness: number, alcohol: number, price: number) {
    var newKegToAdd = new Keg(brand, name, type, bitterness, alcohol, price);
    console.log(newKegToAdd);
    this.newKegSender.emit(newKegToAdd);
  }
}
