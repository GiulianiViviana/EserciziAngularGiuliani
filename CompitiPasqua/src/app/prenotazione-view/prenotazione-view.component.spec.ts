import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneViewComponent } from './prenotazione-view.component';

describe('PrenotazioneViewComponent', () => {
  let component: PrenotazioneViewComponent;
  let fixture: ComponentFixture<PrenotazioneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioneViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
