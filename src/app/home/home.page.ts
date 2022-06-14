import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: Array<any> = [];
  showSearch: boolean = false;
  search: string = '';

  constructor(private tmdb: TmdbService) {}

  ionViewWillEnter() {
    this.tmdb.getPopularMovies().then(movies => this.movies = movies);
  }

  onSearch() {
    if (this.search) {
      this.tmdb.searchMovies(this.search).then(movies => this.movies = movies);
    } else {
      this.tmdb.getPopularMovies().then(movies => this.movies = movies);
    }
  }
}
