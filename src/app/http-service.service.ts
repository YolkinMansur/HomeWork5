import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  token: string = '3fa40c21';
  constructor(private http: HttpClient) {}

  getFilms(film: string, year: string) {
    if (year) {
      return this.http.get(
        `http://www.omdbapi.com/?s=${film}&y=${year}&apikey=${this.token}`
      );
    }
    return this.http.get(
      `http://www.omdbapi.com/?s=${film}&apikey=${this.token}`
    );
  }
  getShortInfo(id: string) {
    return this.http.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${this.token}`
    );
  }
}
