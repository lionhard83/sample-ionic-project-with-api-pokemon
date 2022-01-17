import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RandomerComponent } from './randomer/randomer.component';

const routes: Routes = [
  {
    path: '', // home
    component: HomePage,
  },
  {
    path: ':id',
    loadChildren: () => import('./pokemon-detail/pokemon-detail.module').then( m => m.PokemonDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
