import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbFormComponent } from './wb-form.component';

describe('WbFormComponent', () => {
  let component: WbFormComponent;
  let fixture: ComponentFixture<WbFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WbFormComponent]
    });
    fixture = TestBed.createComponent(WbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
