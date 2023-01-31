import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunktionaleprogComponent } from './funktionaleprog.component';

describe('FunktionaleprogComponent', () => {
  let component: FunktionaleprogComponent;
  let fixture: ComponentFixture<FunktionaleprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunktionaleprogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunktionaleprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
