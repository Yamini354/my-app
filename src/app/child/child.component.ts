import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() count:number=0;

  //create
  @Output() countChange:EventEmitter<number>= new EventEmitter();

  send(){
    //emit
    this.countChange.emit(101);
  }
}
