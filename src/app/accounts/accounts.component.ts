import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accounts:any=[];

  constructor(private accountService:AccountsService){

    accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  term:string="";
  filterAccounts(){
    this.accountService.getFilterAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  column:string="";
  order:string="";

  sortAccounts(){
    this.accountService.getSortAccount(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err: any) => {
        alert("delete failed!");
      }
    )
  }

  pageAccounts(page:number){
    this.accountService.getPagedAccounts(page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  getAccountsWithParams(page:number=1){
    this.accountService.getAccountsWithParams(this.term,this.column,this.order,page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  deleteAccount(id:string){
    this.accountService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!!");
        location.reload();
      },
      (err: any) => {
        alert("delete failed!");
      }
    )
  }
}
