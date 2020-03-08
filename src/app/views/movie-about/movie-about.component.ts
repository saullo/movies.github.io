import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MovieCollection } from 'src/app/models/movie-collection/movie-collection';
import { Movie } from 'src/app/models/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movie-about',
  templateUrl: './movie-about.component.html',
  styleUrls: ['./movie-about.component.scss']
})
export class MovieAboutComponent implements OnInit {
  loading: boolean
  credits
  recommendations: Movie[]
  movieId = this.router.snapshot.parent.paramMap.get('id')

  constructor(private http: HttpClient, private router: ActivatedRoute, public movieService: MovieService) { }

  ngOnInit(): void {
    this.router.params.subscribe(routerParam => {
      this.loading = true
      const credits = this.http.get<any>(`/movie/${routerParam.id}/credits`)
      const recommendations = this.http.get<MovieCollection>(`/movie/${routerParam.id}/recommendations`)

      forkJoin([credits, recommendations]).subscribe(response => {
        response[0].cast = response[0].cast.filter(element => element.profile_path != null)
        this.credits = response[0]
        this.recommendations = response[1].results.splice(0, 6)
        this.loading = false
      })
    })
  }

}
