import { Component } from '@angular/core';
import { FlipkartproductsService } from '../flipkartproducts.service';

@Component({
  selector: 'app-flipkartproducts',
  templateUrl: './flipkartproducts.component.html',
  styleUrls: ['./flipkartproducts.component.css']
})
export class FlipkartproductsComponent {

  flipkartProducts:any=[];

  constructor(private flipkartProductsService:FlipkartproductsService){

    flipkartProductsService.getFlipkartProducts().subscribe(
      (data:any)=>{

        this.flipkartProducts=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }
}
