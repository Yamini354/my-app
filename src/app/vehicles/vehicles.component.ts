import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  vehicles: any = [];

  constructor(private vehicleService: VehiclesService) {

    vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  deleteVehicle(id: string) {
    this.vehicleService.deleteVehicle(id).subscribe(
      (data: any) => {
        alert("deleted succesfully!!!!");
        location.reload();
      },
      (err: any) => {
        alert("delete failed!");
      }
    )
  }
}
