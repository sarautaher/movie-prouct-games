import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { }
  movie(type:string) :Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=b39a89338232a91644374660ca1f3401`);
  }
  getmovieid(type:string ,id:number):Observable<any>{
 return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=b39a89338232a91644374660ca1f3401`)
  }
}
