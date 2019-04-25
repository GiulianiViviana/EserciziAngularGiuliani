import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';  

import { AppComponent } from './app.component';
import { PrenotazioneViewComponent } from './prenotazione-view/prenotazione-view.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioniComponent,
    PrenotazioneViewComponent
  ],
  imports: [
    BrowserModule, NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
