import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWbDialogComponent } from './book-wb-dialog.component';

describe('BookWbDialogComponent', () => {
  let component: BookWbDialogComponent;
  let fixture: ComponentFixture<BookWbDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookWbDialogComponent]
    });
    fixture = TestBed.createComponent(BookWbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
