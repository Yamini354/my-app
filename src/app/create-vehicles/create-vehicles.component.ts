import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

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
      (data:any)=>{
        this.id=data.id;
        vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
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
        (data:any)=>{
          alert("edited sucessfully!!!");
          this.vehicleForm.reset();
        },
        (err:any)=>{
         alert("edit failed");
        }
      )
    }
    else{
      //creted
      //console.log(this.vehicleForm);
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
}
