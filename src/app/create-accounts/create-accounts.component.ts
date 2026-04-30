import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

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

  constructor(private accountService:AccountsService){}

  submit(){
    console.log(this.accountForm);
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
