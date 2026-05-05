import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students:any=[];

  constructor(private studentService:StudentsService){
    this.getStudentsWithParams(1);
    // studentService.getStudents().subscribe(
    //   (data:any)=>{
    //     this.students=data;
    //   },
    //   (err:any)=>{
    //     alert("Internal server error")
    //   }
    // )
  }

  
  column:string="";
  order:string="";
  term:string=""; 

  getStudentsWithParams(page:number=1){
    this.studentService.getStudentsWithParams(this.term,this.column,this.order,page).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  deleteStudent(id:string){
    this.studentService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!");
        location.reload();
      },
      (err: any) => {
        alert("delete failed!");
      }
    )
  }



}