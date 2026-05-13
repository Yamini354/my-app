//import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productForm:FormGroup= new FormGroup({

    title:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(250)]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required]),
    discountPercentage: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required, Validators.min(1),Validators.max(5)]),
    stock: new FormControl('', [Validators.required, Validators.min(1),Validators.max(9999)]),
    tags: new FormArray([]),
    brand: new FormControl('', [Validators.required]),
    sku: new FormControl('', [Validators.required]),
    weight: new FormControl(),
    dimensions: new FormGroup({
      width: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      depth: new FormControl('', [Validators.required])
    }),
    warrantyInformation: new FormControl({value:'1 week warranty', disabled:true}),
    shippingInformation: new FormControl({value:'Ships in 3-5 business days', disabled:true}),
    availabilityStatus: new FormControl('In Stock', [Validators.required]),
    reviews: new FormArray([]),
    returnPolicy: new FormControl({value:'No return policy', disabled:true}),
    minimumOrderQuantity: new FormControl('', [Validators.required, Validators.min(3), Validators.max(100)]),
    meta: new FormGroup({
      createdAt: new FormControl('', [Validators.required]),
      updatedAt: new FormControl('', [Validators.required]),
      barcode: new FormControl('', [Validators.required]),
      qrCode: new FormControl('', [Validators.required]),
    }),
    images: new FormArray([]),
    thumbnail: new FormControl('', [Validators.required, Validators.pattern('https?://.+')])

  })

  get reviewsFormArray(){
    return this.productForm.get('reviews') as FormArray;
  }

  addReview(){
      this.reviewsFormArray.push(
        new FormGroup({
          rating: new FormControl('', [Validators.required, Validators.min(1),Validators.max(5)]),
          comment: new FormControl('', [Validators.required, Validators.min(10),Validators.max(100)]),
          date: new FormControl('', [Validators.required]),
          reviewerName:new FormControl('', [Validators.required, Validators.min(3),Validators.max(50)]),
          reviewerEmail: new FormControl('', [Validators.required, Validators.email])
        })
      )
    }

    addTag() {
      this.tagsFormArray.push(new FormControl('',[Validators.required]));
    }

    deleteTag(index: number) {
      this.tagsFormArray.removeAt(index);
    }

    get imagesFormArray() {
      return this.productForm.get('images') as FormArray;
    }

    addImage() {
      this.imagesFormArray.push(new FormControl('', [Validators.required, Validators.pattern('https?://.+')]));
    }

    deleteImage(index:number){
      this.imagesFormArray.removeAt(index);
    }

    get tagsFormArray(){
      return this.productForm.get('tags') as FormArray;
    }

    deleteCard(i:number){
    this.reviewsFormArray.removeAt(i);
    }

    submit(){
      console.log(this.productForm);
    }
}


