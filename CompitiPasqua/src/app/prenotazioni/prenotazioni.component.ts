import { Component, OnInit } from '@angular/core';
import { PRENOTAZIONI } from '../mock-prenotazioni';
import { Prenotazione } from '../prenotazione';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css']
})
export class PrenotazioniComponent implements OnInit {

  prenotazioni = PRENOTAZIONI;
  selectedPrenotazione: Prenotazione;

  constructor() { }

  ngOnInit() {
  }

  onSelect(prenotazione: Prenotazione): void {
    this.selectedPrenotazione = prenotazione;
  }

  onAddPrenotazione(nome: HTMLInputElement, cognome: HTMLInputElement,indirizzo: HTMLInputElement,telefono: HTMLInputElement,
  DataPrenotazione: HTMLInputElement,OraPrenotazione: HTMLInputElement)
  {
      let pren : Prenotazione = new Prenotazione();
      pren.nome = nome.value;
      pren.cognome = cognome.value;
      pren.indirizzo = indirizzo.value;
      pren.telefono = Number(telefono.value);
      pren.DataPrenotazione = DataPrenotazione.value;
      pren.OraPrenotazione = OraPrenotazione.value;
      this.prenotazioni.push(pren);
  }
}
