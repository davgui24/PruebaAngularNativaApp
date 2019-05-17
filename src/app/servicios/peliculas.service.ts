import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas: pelicula[] = [];

  constructor() { 

    this.peliculas = [
     
      {
        id: 1,
        nombre: 'Pelicula 1',
        anio: '2018',
        descripcion: 'Es un apelicila de drama para Ingenieros',
        duracion: 30,
        calificacion: 4
      },
      {
        id: 2,
        nombre: 'Pelicula 2',
        anio: '2018',
        descripcion: 'Es un apelicila de drama para Cocineros',
        duracion: 30,
        calificacion: 4
      },
      {
        id: 3,
        nombre: 'Pelicula 3',
        anio: '2018',
        descripcion: 'Es un apelicila de drama para Médicos',
        duracion: 30,
        calificacion: 4
      },
      {
        id: 4,
        nombre: 'Pelicula 4',
        anio: '2018',
        descripcion: 'Es un apelicila de drama para Niños',
        duracion: 30,
        calificacion: 4
      }


    ]
  }
}


export interface pelicula {
  id: number;
  nombre: string;
  anio: string;
  descripcion: string;
  duracion: number;
  calificacion: number;
}
