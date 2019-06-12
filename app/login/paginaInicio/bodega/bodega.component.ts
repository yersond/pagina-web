import {Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {serviciosBodega} from './../../../serviciosBodega/bodega.service';
import {Router} from '@angular/router';

@Component({
  selector: 'bodega',
  templateUrl: './bodega.component.html',
  styleUrls:['./bodega.component.css'],
  providers:[serviciosBodega]

})

export class bodegaComponent {
  datosEntrada: Object = {
    Fecha: '',
    Elemento_Id: '',
    Cantidad: '',
    Encargado: '',
    Clasificacion: '',
    Areas_Id: ''
  };
  constructor(private servicios:serviciosBodega){}
  guardarEntrada(){
    this.servicios.guardarEntrada(this.datosEntrada).subscribe(
      respuesta=>{
        alert("el servidor respondio" + respuesta);
      },err=>{
        alert("ocurrio un error");
      },()=>{
        alert("la operacion se ha completado");
      }
      
      
    );
  }
  
}
