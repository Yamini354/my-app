import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient:HttpClient) { }

  getStudents():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  getStudent(id:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }

  

  getStudentsWithParams(term:string,column:string,order:string,page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term+"&sortBy="+column+"&order="+order+"&limit=10&page="+page);
  }

  createStudent(vehicle:any):Observable<any>{
      return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",vehicle);
    }

  editStudent(id:string,vehicle:any):Observable<any>{
    return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,vehicle);
  }

  deleteStudent(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
}
