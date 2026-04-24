import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name:string="Raj";
  age:number=20;

  isInvalid:boolean=true;

  submit(){
    alert("submitted");
  }

  phone:string="+91";
}
