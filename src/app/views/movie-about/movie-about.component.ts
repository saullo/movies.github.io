import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MovieCollection } from 'src/app/models/movie-collection/movie-collection';
import { Movie } from 'src/app/models/movie/movie';

@Component({
  selector: 'app-movie-about',
  templateUrl: './movie-about.component.html',
  styleUrls: ['./movie-about.component.scss']
})
export class MovieAboutComponent implements OnInit {
  recommendations: Movie[]
  movieId = this.router.snapshot.parent.paramMap.get('id')

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(routerParam => {
      this.http.get<MovieCollection>(`/movie/${routerParam.id}/recommendations`).subscribe(
        (response) => this.recommendations = response.results.splice(0, 6),
        (error) => console.log(error)
      )
    })
  }

}
