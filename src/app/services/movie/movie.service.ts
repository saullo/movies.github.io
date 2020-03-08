import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie';
import { HttpClient } from '@angular/common/http';
import { MovieCollection } from 'src/app/models/movie-collection/movie-collection';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movie: Movie
  inTheatres: Movie[]
  popular: Movie[]
  discover: Movie[]
  hasMovies: boolean
  loading: boolean

  constructor(private http: HttpClient) { }

  getMovies() {
    this.loading = true
    const nowPlaying = this.http.get<MovieCollection>('/movie/now_playing')
    const popular = this.http.get<MovieCollection>('/movie/popular')
    const discover = this.http.get<MovieCollection>('/discover/movie')

    forkJoin([nowPlaying, popular, discover]).subscribe(results => {
      this.inTheatres = results[0].results
      this.popular = results[1].results
      this.discover = results[2].results
      this.hasMovies = true
      this.loading = false
    })
  }

  getRandomBanner() {
    const bannerIndex = Math.floor(Math.random() * this.discover.length)
    return this.discover[bannerIndex]
  }
}
