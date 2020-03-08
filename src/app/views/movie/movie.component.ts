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
    private http: HttpClient, 
    private router: ActivatedRoute,
    public movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(routerParam => {
      if (this.movieService.movie == null || this.movieService.movie.id != routerParam.id) {
        this.http.get<Movie>(`/movie/${routerParam.id}`).subscribe(
          (response) => {
            this.movieService.movie = response
            console.log(this.movieService.movie)
          },
          (error) => console.log(error)
        )
      }
      
    })
  }
}
