import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productForm:FormGroup= new FormGroup({

    title:new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    discountPercentage: new FormControl(),
    rating: new FormControl(),
    stock: new FormControl(),
    tags: new FormArray([]),
    brand: new FormControl(),
    sku: new FormControl(),
    weight: new FormControl(),
    dimensions: new FormGroup({
      width: new FormControl(),
      height: new FormControl(),
      depth: new FormControl()
    }),
    warrantyInformation: new FormControl(),
    shippingInformation: new FormControl(),
    availabilityStatus: new FormControl(),
    reviews: new FormArray([]),
    returnPolicy: new FormControl(),
    minimumOrderQuantity: new FormControl(),
    meta: new FormGroup({
      createdAt: new FormControl(),
      updatedAt: new FormControl(),
      barcode: new FormControl(),
      qrCode: new FormControl(),
    }),
    images: new FormArray([]),
    thumbnail: new FormControl()

  })

  get reviewsFormArray(){
    return this.productForm.get('reviews') as FormArray;
  }

  addReview(){
      this.reviewsFormArray.push(
        new FormGroup({
          rating: new FormControl(''),
          comment: new FormControl(''),
          date: new FormControl(''),
          reviewerName:new FormControl(''),
          reviewerEmail: new FormControl('')
        })
      )
    }

  //   get tagsFormArray(){
  //   return this.productForm.get('tags') as FormArray;
  // }

    deleteCard(i:number){
    this.reviewsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.productForm);
  }
}


