import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weather:any=[];

  constructor(private weatherService:WeatherService){
    weatherService.getWeather().subscribe(
      (data:any)=>{
        this.weather=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
