import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  states:string[]=["Telangana","Andhra","Karnataka","Kerala"];
  users:any=[
    {name:'Ram',age:20},
    {name:'Raj',age:30},
    {name:'Sham',age:40},
    {name:'John',age:50}
  ];

  isShow:boolean=true;
}
