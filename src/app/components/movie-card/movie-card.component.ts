import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  goToMovie(): void {
    this.router.navigate([`/movie/${this.movie.id}`])
  }
}
