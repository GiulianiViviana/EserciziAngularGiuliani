import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from '../prenotazione';

@Component({
  selector: 'app-prenotazione-view',
  templateUrl: './prenotazione-view.component.html',
  styleUrls: ['./prenotazione-view.component.css']
})
export class PrenotazioneViewComponent implements OnInit {
  @Input() ciao : Prenotazione;
  constructor() { }

  ngOnInit() {
  }


}
