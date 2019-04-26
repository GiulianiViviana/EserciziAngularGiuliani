import { Component, OnInit } from '@angular/core';
import { PRENOTAZIONI } from '../mock-prenotazioni';
import { Prenotazione } from '../prenotazione';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css']
})
export class PrenotazioniComponent implements OnInit {

  prenotazioni = PRENOTAZIONI;
  selectedPrenotazione: Prenotazione;
  myForm: FormGroup;
 constructor(fb: FormBuilder) { 
  this.myForm = fb.group({
    'nome': ['', Validators.required],
    'cognome': ['', Validators.required],
    'indirizzo': ['', Validators.required],
    'telefono': [''],
    'DataPrenotazione': ['', Validators.required],
    'OraPrenotazione': [''],
  });
 }
  ngOnInit() {
  }

  onSelect(prenotazione: Prenotazione): void {
    this.selectedPrenotazione = prenotazione;
  }
  ngSubmit(){
      let pren : Prenotazione = new Prenotazione();
      pren.nome = this.myForm.controls['nome'].value;
      pren.cognome = this.myForm.controls['cognome'].value;
      pren.indirizzo = this.myForm.controls['indirizzo'].value;
      pren.telefono = Number(this.myForm.controls['telefono'].value);
      pren.DataPrenotazione = this.myForm.controls['DataPrenotazione'].value;
      pren.OraPrenotazione = this.myForm.controls['OraPrenotazione'].value;
      this.prenotazioni.push(pren);
  
}
}
