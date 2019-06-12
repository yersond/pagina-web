import {Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {serviciosBodega} from './../../../../../serviciosBodega/bodega.service';
import {Router} from '@angular/router';

@Component({
  selector: 'buscarElemento',
  templateUrl: './buscarElemento.component.html',
  styleUrls:['./buscarElemento.component.css'],
  providers:[serviciosBodega]

})

export class buscarElementoComponent {
  listaElementos: Array<object> = null;
  constructor(private servicios: serviciosBodega){ }
  ngOnInit(){
    this.servicios.listarElementos().subscribe(
      resultado =>{
        console.log(resultado[0].Cantidad);
        this.listaElementos = resultado;

      }
    )
  }
}