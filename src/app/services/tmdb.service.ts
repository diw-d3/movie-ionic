import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private url: string = 'https://api.themoviedb.org/3';
  private apiKey: string = 'YOUR_API_KEY';

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
}
