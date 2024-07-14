import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../Service/games.service';

@Component({
  selector: 'app-detailsgames',
  templateUrl: './detailsgames.component.html',
  styleUrl: './detailsgames.component.css'
})
export class DetailsgamesComponent implements OnInit {
getid:any;
game:any;
constructor(private _gameServise:GamesService ,private ActivatedRoute:ActivatedRoute){
  this.ActivatedRoute.paramMap.subscribe((parm)=>{
this.getid=parm.get('id')
  })
}
ngOnInit(): void {
  this.getgame(this.getid)  
}
getgame(id:any){
  this._gameServise.getGameId(id).subscribe({
    next:(res)=>{
console.log(res)
this.game=res
    },
    error:()=>{

    }
  })
}
}
