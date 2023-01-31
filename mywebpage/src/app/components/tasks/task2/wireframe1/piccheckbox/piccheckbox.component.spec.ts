import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiccheckboxComponent } from './piccheckbox.component';

describe('PiccheckboxComponent', () => {
  let component: PiccheckboxComponent;
  let fixture: ComponentFixture<PiccheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiccheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiccheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
