import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticazioneComponent } from './autenticazione.component';

describe('AutenticazioneComponent', () => {
  let component: AutenticazioneComponent;
  let fixture: ComponentFixture<AutenticazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticazioneComponent]
    });
    fixture = TestBed.createComponent(AutenticazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
