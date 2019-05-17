import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { pelicula, PeliculasService } from "../../servicios/peliculas.service";

@Component({
  selector: "app-detalle-pelicula",
  templateUrl: "./detalle-pelicula.component.html",
  styles: []
})
export class DetallePeliculaComponent implements OnInit {
  peliculas: pelicula[] = [];
  pelicula: pelicula;
  constructor(
    private activateRoute: ActivatedRoute,
    private _peliculaService: PeliculasService
  ) {
    this.peliculas = this._peliculaService.peliculas;
    this.activateRoute.params.subscribe(index => {
      // console.log("Id", index.index);

      // validamos que hayamos recobido el parámetro del la página anterior
      if (index) {
        console.log("Id", index.index);
        for (let i = 0; i < this.peliculas.length; i++) {
          if (Number(index.index)  == this.peliculas[i].id-1) {
            this.pelicula = this.peliculas[i];
            return;
          }
        }
      } else {
        console.log("No se pudo recibir el parametro");
      }
    });
  }

  ngOnInit() {}
}
