import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search, getSearchFilms } from './films';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}

  searchResult?: Observable<Array<getSearchFilms>> | any;

  mapFilmInfo = new Map();

  openModal: boolean = false;
  idFilm: string = '';

  ngOnInit(): void {
    this.searchResult = [];
  }
  getFilms(obj: Search) {
    this.httpService.getFilms(obj.title, obj.year).subscribe((data: any) => {
      this.searchResult = data.Search;
    });
  }

  getInfoFilm(id: string) {
    this.idFilm = id;
    if (!this.mapFilmInfo.has(id)) {
      this.httpService.getShortInfo(id).subscribe((data: any) => {
        this.mapFilmInfo.set(id, data);
        this.openModal = true;
      });
    } else {
      this.openModal = true;
    }
  }
}
