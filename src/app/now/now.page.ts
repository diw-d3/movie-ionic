import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.page.html',
  styleUrls: ['./now.page.scss'],
})
export class NowPage implements OnInit {
  movies: Array<any> = [];

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.tmdb.getNowMovies().then(movies => this.movies = movies);
  }
}
