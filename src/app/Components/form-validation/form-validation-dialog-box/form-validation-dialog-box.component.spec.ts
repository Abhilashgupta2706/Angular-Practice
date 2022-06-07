import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationDialogBoxComponent } from './form-validation-dialog-box.component';

describe('FormValidationDialogBoxComponent', () => {
  let component: FormValidationDialogBoxComponent;
  let fixture: ComponentFixture<FormValidationDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidationDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidationDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
