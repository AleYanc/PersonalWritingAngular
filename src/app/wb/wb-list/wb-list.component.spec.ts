import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbListComponent } from './wb-list.component';

describe('WbListComponent', () => {
  let component: WbListComponent;
  let fixture: ComponentFixture<WbListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WbListComponent]
    });
    fixture = TestBed.createComponent(WbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
