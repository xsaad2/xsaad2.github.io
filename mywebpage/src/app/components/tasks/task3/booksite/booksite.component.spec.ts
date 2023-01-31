import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksiteComponent } from './booksite.component';

describe('BooksiteComponent', () => {
  let component: BooksiteComponent;
  let fixture: ComponentFixture<BooksiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
