import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsmovie',
  templateUrl: './detailsmovie.component.html',
  styleUrl: './detailsmovie.component.css'
})
export class DetailsmovieComponent implements OnInit {
  movie:any;
  id:any;
  type:any;
constructor(private _moveie:MovieService,private _ActivatedRoute:ActivatedRoute ){}
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param)=>{
      this.id=param.get('id');
      this.type=param.get('media')
    })
    this.Detailsmovie(this.type,this.id)
}
Detailsmovie(type:string ,id:any){
  this._moveie.getmovieid(type,id).subscribe({
    next:(res)=>{
      console.log(res)
      this.movie=res;
    },
    error:(err)=>{

    }
  })
}
}
