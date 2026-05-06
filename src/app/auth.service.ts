import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  //api call with post method
  login(user:any):Observable<any>{
    return this.httpClient.post("https://api.escuelajs.co/api/v1/auth/login",user)
  }
}
