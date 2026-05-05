import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  studentForm: FormGroup = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      dob: new FormControl(),
      profile_picture: new FormControl(),
      email: new FormControl(),
      school_logo: new FormControl(),
      school_name: new FormControl(),
      school_city: new FormControl(),
      school_pin: new FormControl()
    })
  
    id:string="";
    constructor(private studentService:StudentsService, private activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe(
            (data:any)=>{
              this.id=data.id;
              studentService.getStudent(data.id).subscribe(
                (data:any)=>{
                  this.studentForm.patchValue(data);
                }
              )
            }
          )
    }
    
    submit(){
        if (this.id){
          //edit
          //console.log(this.vehicleForm);
          this.studentService.editStudent(this.id,this.studentForm.value).subscribe(
            (data:any)=>{
              alert("edited sucessfully!!!");
              this.studentForm.reset();
            },
            (err:any)=>{
             alert("edit failed");
            }
          )
        }
        else{
          //creted
          //console.log(this.vehicleForm);
          this.studentService.createStudent(this.studentForm.value).subscribe(
            (data:any)=>{
              alert("created sucessfully!!!");
              this.studentForm.reset();
            },
            (err:any)=>{
              alert("creation failed");
            }
          )
        }
      }
}
