import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select class="dropdown" (change)="onChange($event.target.value)">
    <option selected="selected" value="all">All Kegs</option>
    <option value="low">Low Kegs</option>
    <option value="out">Tapped Out Kegs</option>
  </select>

  <div *ngFor="let currentKeg of childKegList | kegFilter:selectedKegFilter">
    <div class="tap">
    <button class="button drinkBeer" (click)="lessOne(currentKeg)">Drink a Beer</button>
      <h3 id="keg-header">{{ currentKeg.brand  + " " + currentKeg.name + " " + currentKeg.type }}</h3>
      <ul class="keg-info">
        <li>{{"ABV - " +  currentKeg.alcohol  + "%" }}</li>
        <li>{{"IBU - " +  currentKeg.bitterness }}</li>
        <li>{{"Price - " + currentKeg.price }}</li>
        <li>{{"Pints left - " +  currentKeg.pintsLeft }}</li>
      </ul>
      <img id="keg-icon" src="./../resources/images/keg.png">
      <div id="keg-animation"
      [class.beer-stage-one]="124 >= currentKeg.pintsLeft"
      [class.beer-stage-two]="112 > currentKeg.pintsLeft"
      [class.beer-stage-three]="100 > currentKeg.pintsLeft"
      [class.beer-stage-four]="88 > currentKeg.pintsLeft"
      [class.beer-stage-five]="76 > currentKeg.pintsLeft"
      [class.beer-stage-six]="64 > currentKeg.pintsLeft"
      [class.beer-stage-seven]="52 > currentKeg.pintsLeft"
      [class.beer-stage-eight]="40 > currentKeg.pintsLeft"
      [class.beer-stage-nine]="28 > currentKeg.pintsLeft"
      [class.beer-stage-ten]="14 > currentKeg.pintsLeft"
      >
        <div [class.keg-level]="125 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="124 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="123 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="122 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="121 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="120 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="119 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="118 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="117 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="116 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="115 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="114 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="113 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="112 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="111 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="110 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="109 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="108 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="107 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="106 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="105 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="104 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="103 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="102 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="101 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="100 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="99 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="98 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="97 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="96 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="95 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="94 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="93 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="92 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="91 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="90 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="89 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="88 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="87 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="86 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="85 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="84 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="83 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="82 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="81 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="80 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="79 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="78 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="77 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="76 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="75 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="74 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="73 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="72 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="71 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="70 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="69 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="68 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="67 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="66 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="65 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="64 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="63 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="62 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="61 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="60 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="59 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="58 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="57 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="56 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="55 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="54 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="53 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="52 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="51 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="50 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="49 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="48 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="47 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="46 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="45 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="44 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="43 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="42 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="41 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="40 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="38 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="38 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="36 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="36 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="34 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="34 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="32 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="32 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="30 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="39 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="28 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="27 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="26 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="25 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="24 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="23 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="22 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="21 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="20 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="20 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="19 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="18 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="17 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="16 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="15 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="14 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="13 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="12 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="11 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="10 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="9 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="8 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="7 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="6 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="5 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="4 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="3 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="2 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="1 > currentKeg.pintsLeft"></div>
        <div [class.keg-level]="0 > currentKeg.pintsLeft"></div>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  lessOne(kegToEdit: Keg) {
    if (kegToEdit.pintsLeft > 0) {
      kegToEdit.pintsLeft -= 1;
    }
  }
  public selectedKegFilter: string = "all";
  onChange(optionFromMenu) {
    this.selectedKegFilter = optionFromMenu;
    console.log(this.selectedKegFilter);
  }
}
