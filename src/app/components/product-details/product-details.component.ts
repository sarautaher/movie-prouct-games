import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../Service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  id:any;
  ProductS:any
constructor(private _ProductService: ProductService ,private _ActivatedRoute: ActivatedRoute){}
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param)=>{
      this.id=param.get('id') 
    })
    this.getproduct(this.id)
}
getproduct(id:any){
  this._ProductService.productDetails(id).subscribe({
    next:(res)=>{
    this.  ProductS=res.data
console.log(res)
    }
  })
}
}
