import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {

  accountForm: FormGroup=new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city : new FormControl(),
    profie_picture: new FormControl(),
    ifsc_code: new FormControl()
  })

  id:string="";
  constructor(private accountService:AccountsService, private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue(data);
          }
        )
      }
    )
  }

  submit(){
    if(this.id){
      //edit
      this.accountService.editAccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("edit sucessfully!!!");
          this.accountForm.reset();
        },
        (err:any)=>{
          alert("edit failed");
        }
    )
    }
    else{
      //create
      //console.log(this.accountForm);
      this.accountService.createAccount(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("created sucessfully!!!");
          this.accountForm.reset();
        },
        (err:any)=>{
          alert("creation failed");
        }
      )
    }
  }
}
