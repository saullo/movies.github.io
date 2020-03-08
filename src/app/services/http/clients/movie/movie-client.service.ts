import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from 'src/app/models/movie-response/movie-response';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieClientService {

  constructor(private http: HttpClient) { }

  nowPlaying(): Observable<MovieResponse> { return this.http.get<MovieResponse>('/movie/now_playing') }
  popular(): Observable<MovieResponse> { return this.http.get<MovieResponse>('/movie/popular') }
  discover(): Observable<MovieResponse> { return this.http.get<MovieResponse>('/discover/movie') }

  movie(id: number): Observable<Movie> { return this.http.get<Movie>(`/movie/${id}`) }
  credits(id: number): Observable<any> { return this.http.get(`/movie/${id}/credits`) }
  recommendations(id: number): Observable<MovieResponse> { return this.http.get<MovieResponse>(`/movie/${id}/recommendations`) }
}
