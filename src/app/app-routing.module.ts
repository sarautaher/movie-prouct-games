import { GamesComponent } from './components/games/games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { DetailsmovieComponent } from './components/detailsmovie/detailsmovie.component';
import { DetailsgamesComponent } from './components/detailsgames/detailsgames.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'}
  ,{path:'home',component:HomeComponent, title:'home'},
{path:'movie',component:MovieComponent,title:'movie'},
{path:'Detailsmovie/:media/:id',component:DetailsmovieComponent,title:'Detailsmovie'},
{path:'game',component:GamesComponent,title:'Game'},
{path:'Detailsgame/:id',component:DetailsgamesComponent,title:'DetailGame'},
{path:'product',component:ProductComponent,title:'Product'},
{path:'productDetails/:id',component:ProductDetailsComponent,title:'ProductDetails'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
