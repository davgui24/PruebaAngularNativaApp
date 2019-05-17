import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPeliculasComponent } from './componentes/lista-peliculas/lista-peliculas.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';

const APP_ROUTES: Routes = [
  { path: 'lista', component: ListaPeliculasComponent },
  { path: 'detallesPelicula/:index', component: DetallePeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' }

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
