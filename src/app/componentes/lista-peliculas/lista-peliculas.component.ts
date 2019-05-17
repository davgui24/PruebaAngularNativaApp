import { Component, OnInit } from '@angular/core';
import { pelicula } from 'src/app/servicios/peliculas.service';
import { PeliculasService } from '../../servicios/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styles: []
})
export class ListaPeliculasComponent implements OnInit {

  // Creamos un arreglo de pelicualas que se llenará en el constructor con las paliculas del servicio
    peliculas: pelicula[] = [];

    constructor(private _peliculaService: PeliculasService, private router: Router) { 
      this.peliculas = this._peliculaService.peliculas;
    }

  ngOnInit() {
  }

  verDetallePelicula(index: number){
    // console.log('Index', index);

    this.router.navigate(['/detallesPelicula', index])

  }

}
