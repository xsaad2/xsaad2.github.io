import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAufgabeComponent } from './header-aufgabe.component';

describe('HeaderAufgabeComponent', () => {
  let component: HeaderAufgabeComponent;
  let fixture: ComponentFixture<HeaderAufgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAufgabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAufgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
