import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(routerParam => {
      this.http.get(`/movie/${routerParam.id}`).subscribe(
        (response) => this.movie = response,
        (error) => console.log(error)
      )
    })
  }
}
