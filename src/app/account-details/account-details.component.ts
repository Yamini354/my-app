import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  account:any={};
  constructor(private activatedRouter:ActivatedRoute, private accountsService:AccountsService){
    activatedRouter.params.subscribe(
      (data:any)=>{
        accountsService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }
        )
      }
    )
  }
}
