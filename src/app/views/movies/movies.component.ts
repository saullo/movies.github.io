import { Component, OnInit } from '@angular/core';
import { MovieClientService } from 'src/app/services/http/clients/movie/movie-client.service';
import { forkJoin } from 'rxjs';
import { Movie } from 'src/app/models/movie/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  sections = [
    { title: 'In theatres', movies: [] },
    { title: 'Discover', movies: [] },
    { title: 'Popular', movies: [] },
  ]
  banner: Movie
  loading: boolean

  constructor(private movieClient: MovieClientService) { }

  ngOnInit(): void {
    this.loading = true
    const nowPlaying = this.movieClient.nowPlaying()
    const popular = this.movieClient.popular()
    const discover = this.movieClient.discover()

    forkJoin([nowPlaying, popular, discover]).subscribe(response => {
      this.sections[0].movies = response[0].results
      this.sections[1].movies = response[1].results
      this.sections[2].movies = response[2].results

      const bannerIndex = Math.floor(Math.random() * this.sections[1].movies.length)
      this.banner = this.sections[1].movies[bannerIndex]

      this.loading = false
    })
  }
}
