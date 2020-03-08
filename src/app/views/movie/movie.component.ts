import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { MovieCollection } from 'src/app/models/movie-collection/movie-collection';
import { Movie } from 'src/app/models/movie/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    public movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(routerParam => this.movieService.get(routerParam.id))
  }
}
