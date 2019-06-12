import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {serviciosBodega} from '../../../../../serviciosBodega/bodega.service';
import {Router} from '@angular/router';

@Component({
  selector: 'consultado',
  templateUrl: './consultado.component.html',
  styleUrls:['./consultado.component.css'],
  providers:[serviciosBodega]

})

export class consultadoComponent {
  listaEntradas: Array<object> = null;
  constructor(private servicios: serviciosBodega){ }
  ngOnInit(){
    this.servicios.listarEntradas().subscribe(
      resultado =>{
        console.log(resultado[0].Cantidad);
        this.listaEntradas = resultado;

      }
    )
  }
  
}