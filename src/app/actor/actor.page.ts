import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.page.html',
  styleUrls: ['./actor.page.scss'],
})
export class ActorPage {
  actor: any;
  movies: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tmdb: TmdbService
  ) { }

  ionViewWillEnter() {
    // https://api.themoviedb.org/3/person/ID?api_key=KEY&append_to_response=credits
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tmdb.getActor(id).then(actor => {
      this.actor = actor;
      return this.tmdb.getActorMovies(id)
    }).then(movies => this.movies = movies.cast);
  }

  openMovie(movie) {
    this.router.navigate(['/movie', movie.id]);
  }

}
