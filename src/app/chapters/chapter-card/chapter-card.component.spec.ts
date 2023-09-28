import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterCardComponent } from './chapter-card.component';

describe('ChapterCardComponent', () => {
  let component: ChapterCardComponent;
  let fixture: ComponentFixture<ChapterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapterCardComponent]
    });
    fixture = TestBed.createComponent(ChapterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
