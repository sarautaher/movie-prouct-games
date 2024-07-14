import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  product:any[]=[];
constructor(private _Product:ProductService){}
ngOnInit(): void {
 this. getproduct()  
}
getproduct(){
this._Product.getproduct().subscribe({
  next:(res)=>{
    console.log(res.data)
    this.product=res.data
  }
})
}
}
