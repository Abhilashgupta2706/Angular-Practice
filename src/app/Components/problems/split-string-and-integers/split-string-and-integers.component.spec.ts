import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStringAndIntegersComponent } from './split-string-and-integers.component';

describe('SplitStringAndIntegersComponent', () => {
  let component: SplitStringAndIntegersComponent;
  let fixture: ComponentFixture<SplitStringAndIntegersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStringAndIntegersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStringAndIntegersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
