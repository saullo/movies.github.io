import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './views/movies/movies.component';
import { MovieComponent } from './views/movie/movie.component';
import { MovieVideosComponent } from './views/movie-videos/movie-videos.component';
import { MovieAboutComponent } from './views/movie-about/movie-about.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { 
    path: 'movie/:id', 
    component: MovieComponent, 
    children: [
      { path: '', component: MovieAboutComponent, },
      { path: 'videos', component: MovieVideosComponent },
      { path: 'imagens', component: MovieVideosComponent }
    ] 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
