import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespowithflexboxComponent } from './respowithflexbox.component';

describe('RespowithflexboxComponent', () => {
  let component: RespowithflexboxComponent;
  let fixture: ComponentFixture<RespowithflexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespowithflexboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespowithflexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
