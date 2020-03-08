import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { forkJoin } from 'rxjs';
import { MovieClientService } from 'src/app/services/http/clients/movie/movie-client.service';
import { Credits } from 'src/app/models/credits/credits';
import { Cast } from 'src/app/models/cast/cast';

@Component({
  selector: 'app-movie-about',
  templateUrl: './movie-about.component.html',
  styleUrls: ['./movie-about.component.scss']
})
export class MovieAboutComponent implements OnInit {
  loading: boolean
  credits: Credits
  recommendationsList: Movie[]
  informationList = [
    { title: 'Original title', value: this.movieService.movie.original_title },
    { title: 'Original language', value: this.movieService.movie.original_language },
    { title: 'Status', value: this.movieService.movie.status },
    { title: 'Duration', value: this.movieService.movie.runtime },
    { title: 'Budget', value: this.movieService.movie.budget },
    { title: 'Revenue', value: this.movieService.movie.revenue }
  ]

  constructor(
    private router: ActivatedRoute, 
    private movieClient: MovieClientService,
    public movieService: MovieService) { }

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      this.loading = true
      const credits = this.movieClient.credits(id)
      const recommendations = this.movieClient.recommendations(id)

      forkJoin([credits, recommendations]).subscribe(response => {
        console.log(response)
        this.credits = response[0]
        this.recommendationsList = response[1].results
        this.loading = false
      })
    })
  }

  get casts(): Cast[] {
    return this.credits.cast.filter(cast => cast.profile_path != null).slice(0, 12)
  }

  get recommendations(): Movie[] {
    return this.recommendationsList.filter(recommendation => recommendation.poster_path != null).slice(0, 6)
  }
}
