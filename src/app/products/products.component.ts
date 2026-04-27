import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any = [
  { id:1, name:"Pen", price:10, rating:3, freeDelivery:true },
  { id:2, name:"Phone", price:100, rating:2, freeDelivery:false },
  { id:3, name:"Shirt", price:400, rating:4, freeDelivery:true },
  { id:4, name:"Cap", price:200, rating:5, freeDelivery:false },
  { id:5, name:"Mobile Case", price:300, rating:2, freeDelivery:true },
  { id:6, name:"Remote", price:400, rating:2.5, freeDelivery:false }
];
onlyFreeDelivery(){
  // *ngIf="user.freeDelivery==true"
  this.products =this.products.filter((product:any)=>product.freeDelivery===true);
}

priceLH(){
  this.products.sort((a:any,b:any)=>a.price-b.price);
}
priceHL(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
}

ratingLH(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating);
}
ratingHL(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating);
}

discount(){
  this.products.map((product:any)=>product.price=product.price/2);
}

priceWithDeliveryCharges(){
  this.products.map((product:any)=>product.price=product.price+10);
}
total(){
  let totalPrice=this.products.reduce((agg:number,product:any)=>agg+product.price,0);
  alert("total price:"+totalPrice);
}

totalItems(){
  let totalcartitems=this.products.length;
  alert("Total Cart Items:"+totalcartitems);
}

users:any = this.products;

  name:string = "";
  price:number = 0;
  rating:number = 0;
  freeDelivery:any = "";
  
cart() {
  let product = {
    id: this.products.length + 1,
    name: this.name,
    price: this.price,
    rating: this.rating,
    freeDelivery: this.freeDelivery
  };

  this.products.push(product);
}
delete(i:number){
  this.products.splice(i,1);
}
}
