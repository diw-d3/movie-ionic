import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private url: string = 'https://api.themoviedb.org/3';
  private apiKey: string = 'ebc0a4ad59da5f80113ec7d1142c72a7';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Promise<any> {
    return this.http.get(this.url + '/movie/popular?api_key=' + this.apiKey).toPromise().then(
      (response: any) => response.results
    );
  }

  getTopMovies(): Promise<any> {
    return this.http.get(this.url + '/movie/top_rated?api_key=' + this.apiKey).toPromise().then(
      (response: any) => response.results
    );
  }

  getNowMovies(): Promise<any> {
    return this.http.get(this.url + '/movie/now_playing?api_key=' + this.apiKey).toPromise().then(
      (response: any) => response.results
    );
  }

  getMovie(id): Promise<any> {
    return this.http.get(this.url + '/movie/' + id + '?api_key=' + this.apiKey + '&append_to_response=credits')
               .toPromise();
  }

  searchMovies(query): Promise<any> {
    return this.http.get(this.url + '/search/movie?api_key=' + this.apiKey + '&query=' + query)
               .toPromise().then((response: any) => response.results);
  }

  getActor(id): Promise<any> {
    return this.http.get(this.url + '/person/' + id + '?api_key=' + this.apiKey)
               .toPromise();
  }

  getActorMovies(id): Promise<any> {
    return this.http.get(this.url + '/person/' + id + '/movie_credits?api_key=' + this.apiKey)
               .toPromise();
  }
}
