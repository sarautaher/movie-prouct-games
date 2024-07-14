import { GamesService } from './../../Service/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {
  Games:any[]=[];
  
constructor( private _GamesService:GamesService){

}
ngOnInit(): void {
 this.getgame('MMORPG')   
}
getgame(game:any){
  this._GamesService.getGame(game).subscribe({next:(res)=>{
console.log(res)
this.Games=res.slice(0,52);
  }
,error:(err)=> {
    
},})
}

}
