import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: Array<any> = [];

  constructor(private tmdb: TmdbService) {}

  ionViewWillEnter() {
    this.tmdb.getPopularMovies().then(movies => this.movies = movies);
  }
}
