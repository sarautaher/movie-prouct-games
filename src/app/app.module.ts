import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsmovieComponent } from './components/detailsmovie/detailsmovie.component';
import { GamesComponent } from './components/games/games.component';
import { DetailsgamesComponent } from './components/detailsgames/detailsgames.component';
import { ProductComponent } from './components/product/product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    DetailsmovieComponent,
    GamesComponent,
    DetailsgamesComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
