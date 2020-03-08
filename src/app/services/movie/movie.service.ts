import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie';
import { MovieClientService } from '../http/clients/movie/movie-client.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movie: Movie
  loading: boolean
  
  constructor(private movieClient: MovieClientService) {
  }

  get(id: number) {
    this.loading = true
    this.movieClient.movie(id).subscribe(
      (response) => {
        this.movie = response
        this.loading = false
      }
    )
  }
}
