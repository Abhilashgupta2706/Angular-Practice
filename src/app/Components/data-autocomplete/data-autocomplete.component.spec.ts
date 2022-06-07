import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAutocompleteComponent } from './data-autocomplete.component';

describe('DataAutocompleteComponent', () => {
  let component: DataAutocompleteComponent;
  let fixture: ComponentFixture<DataAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
