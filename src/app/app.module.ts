import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './views/app/app.component';
import { MoviesComponent } from './views/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieComponent } from './views/movie/movie.component';
import { httpInterceptorProviders } from './services/http/interceptors';
import { MovieAboutComponent } from './views/movie-about/movie-about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieComponent,
    MovieAboutComponent,
    NavbarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
