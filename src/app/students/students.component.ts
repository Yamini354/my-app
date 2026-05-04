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

    studentService.getStudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal server error")
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



//view button
  selectedStudent: any = null;

viewStudent(student: any) {
  this.selectedStudent = student;
}

closeModal() {
  this.selectedStudent = null;
}
}
