import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  vehicle:any={};
  constructor(private activatedRoute:ActivatedRoute, private vehiclesService:VehiclesService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        vehiclesService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }
}
