import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcmaComponent } from './ecma.component';

describe('EcmaComponent', () => {
  let component: EcmaComponent;
  let fixture: ComponentFixture<EcmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
