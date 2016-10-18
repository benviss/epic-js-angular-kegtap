import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container-fluid">
    <h1 class="header">Keg List</h1>
    <new-keg (newKegSender)="addKeg($event)">
    </new-keg>
    <keg-list [childKegList]="masterKegList">
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [];

  constructor() {
  this.masterKegList = [
    new Keg("Deschutes", "Pinedrops", "IPA", 70, 6.5, 5)
    ];
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
    console.log(this.masterKegList);
  }

}
