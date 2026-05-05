import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Vehicle } from '../vehicle';

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

  id:string="";
  constructor(private vehicleService:VehiclesService, private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(
      (data:Params)=>{
        this.id=data['id'];
        vehicleService.getVehicle(data['id']).subscribe(
          (data:Vehicle)=>{
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }

  submit(){
    if (this.id){
      //edit
      //console.log(this.vehicleForm);
      this.vehicleService.editVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:Vehicle)=>{
          alert("edited sucessfully!!!");
          this.vehicleForm.reset();
        },
        (err:Error)=>{
         alert("edit failed");
        }
      )
    }
    else{
      //creted
      //console.log(this.vehicleForm);
      this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:Vehicle)=>{
          alert("created sucessfully!!!");
          this.vehicleForm.reset();
        },
        (err:Error)=>{
          alert("creation failed");
        }
      )
    }
  }
}
