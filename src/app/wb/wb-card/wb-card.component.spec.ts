import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbCardComponent } from './wb-card.component';

describe('WbCardComponent', () => {
  let component: WbCardComponent;
  let fixture: ComponentFixture<WbCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WbCardComponent]
    });
    fixture = TestBed.createComponent(WbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
