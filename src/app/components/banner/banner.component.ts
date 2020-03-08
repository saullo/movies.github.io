import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() banner: Movie
  @Input() viewMore: boolean

  constructor() { }

  ngOnInit(): void {
  }

  get backgroundImageUrlStyle(): string {
    return `background-image: url(https://image.tmdb.org/t/p/original/${this.banner.backdrop_path});`
  }
}
