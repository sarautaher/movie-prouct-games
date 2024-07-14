import { MovieService } from './../../Service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  movies:any[]=[];
constructor(private _MovieService:MovieService){}
ngOnInit(): void {
  this.getMovies("movie")  
}
getMovies(tyep:string){
  document.getElementById('movie')?.classList.remove('d-none');
  document.getElementById('tv')?.classList.add('d-none');
  this._MovieService.movie(tyep).subscribe({next:
    (res)=>{
      this.movies=res.results;

      console.log(res.results
      )
    }})
}
getTv(tyep:string){
  document.getElementById('movie')?.classList.add('d-none');
  document.getElementById('tv')?.classList.remove('d-none');
 
  this._MovieService.movie(tyep).subscribe({next:
    (res)=>{
      this.movies=res.results;

      console.log(res.results
      )
    }})
}

}
