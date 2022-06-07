import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperFormDialogBoxComponent } from './stepper-form-dialog-box.component';

describe('StepperFormDialogBoxComponent', () => {
  let component: StepperFormDialogBoxComponent;
  let fixture: ComponentFixture<StepperFormDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperFormDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperFormDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
