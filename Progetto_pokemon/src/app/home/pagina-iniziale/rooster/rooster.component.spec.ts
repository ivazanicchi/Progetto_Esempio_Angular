import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterComponent } from './rooster.component';

describe('RoosterComponent', () => {
  let component: RoosterComponent;
  let fixture: ComponentFixture<RoosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoosterComponent]
    });
    fixture = TestBed.createComponent(RoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
