import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage {
  movie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmdb: TmdbService
  ) { }

  ionViewWillEnter() {
    // https://api.themoviedb.org/3/movie/ID?api_key=KEY&append_to_response=credits
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tmdb.getMovie(id).then(movie => this.movie = movie);
  }

  filterCastWithPhoto(casts) {
    return casts.filter(cast => cast.profile_path);
  }
}
