import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wirframe1Component } from './wirframe1.component';

describe('Wirframe1Component', () => {
  let component: Wirframe1Component;
  let fixture: ComponentFixture<Wirframe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wirframe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wirframe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
