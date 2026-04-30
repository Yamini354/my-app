import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent {

  vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  })

  constructor(private vehicleService:VehiclesService){}

  submit(){
    console.log(this.vehicleForm);
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("created sucessfully!!!");
        this.vehicleForm.reset();
      },
      (err:any)=>{
        alert("creation failed");
      }
    )
  }
}
