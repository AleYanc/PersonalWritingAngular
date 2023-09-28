import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFormComponent } from './characters-form.component';

describe('CharactersFormComponent', () => {
  let component: CharactersFormComponent;
  let fixture: ComponentFixture<CharactersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersFormComponent]
    });
    fixture = TestBed.createComponent(CharactersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
