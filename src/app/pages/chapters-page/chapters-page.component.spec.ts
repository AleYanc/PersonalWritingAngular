import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersPageComponent } from './chapters-page.component';

describe('ChaptersPageComponent', () => {
  let component: ChaptersPageComponent;
  let fixture: ComponentFixture<ChaptersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaptersPageComponent]
    });
    fixture = TestBed.createComponent(ChaptersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
