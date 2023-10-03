import { Component, OnInit } from '@angular/core';
import { DatosRegionalerService } from 'src/app/servicios/datos-regionaler.service';

@Component({
  selector: 'app-lista-regiones',
  templateUrl: './lista-regiones.component.html',
  styleUrls: ['./lista-regiones.component.scss'],
})
export class ListaRegionesComponent  implements OnInit {

  regiones: any[] = [];

  constructor(private datosRegionalesService: DatosRegionalerService) { }

  ngOnInit() {
    this.obtenerRegiones();
  }

  obtenerRegiones(){
    this.datosRegionalesService.obtenerDatosRegionales().subscribe(
      (data) => {
        this.regiones = data.data;
      },
      (error) =>{
        console.error('Error al obtener las regiones: ', error);
        
      }
    );
  }

}
