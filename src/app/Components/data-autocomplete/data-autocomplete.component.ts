import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  countries!: any[]
  states!: any[]
  cities!: any[]

  locationForm !: FormGroup

  selectedCountryCode !: any
  selectedStateCode !: any

  constructor(private builder: FormBuilder) { }

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
    this.selectedCountryCode = country.value
    console.log(this.selectedCountryCode)
    this.states = State.getStatesOfCountry(this.selectedCountryCode)
  }

  stateSelected(state: any) {
    this.selectedStateCode = state.value
    console.log(state.value)
    this.cities = City.getCitiesOfState(this.selectedCountryCode, this.selectedStateCode)
  }

  onSubmit() {
    var countryCode = this.locationForm.value['country']
    var country = Country.getCountryByCode(countryCode)

    var stateCode = this.locationForm.value['state']
    var state = State.getStateByCodeAndCountry(stateCode, countryCode)

    var city = this.locationForm.value['city']

    // alert(`${country}, ${state}, ${city}`)
    console.log(`${country ? country['name'] : null}, ${state ? state['name'] : null  }, ${city}`)
  }
}
