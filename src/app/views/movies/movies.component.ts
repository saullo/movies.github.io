import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    if (!this.movieService.hasMovies) this.movieService.getMovies()
  }

}
