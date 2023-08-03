import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityForm: FormGroup;
  weather:any;

  constructor(
    private X: FormBuilder,
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.cityForm = this.X.group({
      city: ['', [Validators.required,]],

    })
  }
  search(){
    this.weatherService.search(this.cityForm.value).subscribe((response)=>{
      console.log("here is response from BE",response.result);
      this.weather = response.result;
    });

  }

}
