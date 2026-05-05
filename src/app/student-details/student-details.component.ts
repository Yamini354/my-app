import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  student:any={};
  constructor(private activatedRoute:ActivatedRoute, private studentService:StudentsService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        studentService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.student=data;
          }
        )
      }
    )
  }
}
