import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm:FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address :new FormGroup({
      city:new FormControl(),
      pin: new FormControl(),
    }),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        name: new FormControl(),
        cvv: new FormControl(),
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
