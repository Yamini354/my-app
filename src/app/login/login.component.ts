import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })

  constructor(private authServise:AuthService, private router:Router){}
  login(){
    console.log(this.loginForm);
    
    this.authServise.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login sucess");
        //go to dashboard
        this.router.navigateByUrl("/dashboard");
        //store token
        localStorage.setItem("token",data.access_token);
      },
      (err:any)=>{
        alert("invalid Credentials");
      }
    )
  }
}
