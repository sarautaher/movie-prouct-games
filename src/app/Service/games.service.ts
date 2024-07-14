import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '86cd0fe32cmsh929479f84445fa4p16164ejsndace69528875',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  });

  constructor(private _HttpClient: HttpClient) { }

  getGame(category: any): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/games?category=${category}`, { headers: this.headers });
  }
  getGameId(category: any): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/game?id=${category}`, { headers: this.headers });
  }
}

