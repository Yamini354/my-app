import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm:FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl("", [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=[^!@#$%^&*]*[!@#$%^&*]).{8,}$/)]),
    address :new FormGroup({
      city:new FormControl("",[Validators.required]),
      pin: new FormControl("", [Validators.required, Validators.min(100000), Validators.max(999999)]),
    }),
    cards: new FormArray([]),
    type: new FormControl(),
    busFee: new FormControl("", [Validators.required, Validators.min(0)]),
    hostelFee: new FormControl("", [Validators.required,Validators.min(0)]),
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl("",Validators.required),
        name: new FormControl("",Validators.required),
        cvv: new FormControl("",Validators.required),
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }
}
