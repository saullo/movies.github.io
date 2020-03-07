import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Movie } from 'src/app/models/movie/movie';
import { MovieCollection } from 'src/app/models/movie-collection/movie-collection';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  inTheatres: Movie[]
  popular: Movie[]
  discover: Movie[]
  banner: Movie

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const nowPlaying = this.http.get<MovieCollection>('/movie/now_playing')
    const popular = this.http.get<MovieCollection>('/movie/popular')
    const discover = this.http.get<MovieCollection>('/discover/movie')

    forkJoin([nowPlaying, popular, discover]).subscribe(results => {
      this.inTheatres = results[0].results.slice(0, 12)

      const bannerIndex = Math.floor(Math.random() * results[1].results.length)
      this.banner = results[1].results[bannerIndex]
      this.popular = results[1].results.slice(0, 12)

      this.discover = results[2].results.slice(0, 12)
    })
  }

}
