import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VehiclesService } from '../vehicles.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  vehicle:Vehicle=<Vehicle>{};
  constructor(private activatedRoute:ActivatedRoute, private vehiclesService:VehiclesService){
    activatedRoute.params.subscribe(
      (data:Params)=>{
        vehiclesService.getVehicle(data['id']).subscribe(
          (data:Vehicle)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }
}
