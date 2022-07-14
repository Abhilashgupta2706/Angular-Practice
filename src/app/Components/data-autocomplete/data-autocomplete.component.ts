import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { Country, State, City } from 'country-state-city/dist/';
1
@Component({
  selector: 'app-data-autocomplete',
  templateUrl: './data-autocomplete.component.html',
  styleUrls: ['./data-autocomplete.component.scss']
})
export class DataAutocompleteComponent implements OnInit {

  selectedCountry: number = 0;
  selectedState: number = 0;
  selectedCity: number = 0;

  countries!: any[]
  states!: any[]
  cities!: any[]

  location!: any

  locationForm !: FormGroup

  selectedCountryCode !: any
  selectedStateCode !: any

  constructor(
    private builder: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    // console.log(Country.getAllCountries())
    // console.log(State.getAllStates())
    // console.log(City.getAllCities())]

    this.locationForm = this.builder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    })
    this.countries = Country.getAllCountries()
  }

  countrySelected(country: any) {
    this.cities = []
    this.states = []

    this.selectedCountryCode = country.value
    let countrySelected = Country.getCountryByCode(this.selectedCountryCode)
    console.log("Selected Country:", countrySelected ? countrySelected['name'] : null)

    this.states = State.getStatesOfCountry(this.selectedCountryCode)
    
    this.selectedState = 0
    this.selectedCity = 0
  }

  stateSelected(state: any) {
    this.cities = []

    this.selectedStateCode = state.value
    let stateSelected = State.getStateByCodeAndCountry(this.selectedStateCode, this.selectedCountryCode)
    console.log("Selected State:", stateSelected ? stateSelected['name'] : null)

    this.cities = City.getCitiesOfState(this.selectedCountryCode, this.selectedStateCode)
  }

  citySelected(city: any) {
    console.log("Selected City:", city.value)
    this.selectedCity = city.value
  }

  onSubmit() {
    var country = Country.getCountryByCode(this.selectedCountryCode)
    var state = State.getStateByCodeAndCountry(this.selectedStateCode, this.selectedCountryCode)
    var city = this.selectedCity

    this.location = [
      country ? country['name'] : null,
      state ? state['name'] : null,
      city
    ]
  }

  reset() {
    this.location = undefined
    this.locationForm.reset()

    this.selectedCountry = 0;
    this.selectedState = 0;

    this.states = []
    this.cities = []
  }
}
