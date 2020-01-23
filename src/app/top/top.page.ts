import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {
  movies: Array<any> = [];

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.tmdb.getTopMovies().then(movies => this.movies = movies);
  }
}
