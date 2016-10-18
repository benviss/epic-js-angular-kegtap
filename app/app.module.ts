import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewKegComponent }   from './new-keg.component';
import { KegListComponent } from './keg-list.component';
import { KegFilterPipe } from './keg-filter.pipe';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    NewKegComponent,
    KegListComponent,
    KegFilterPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
