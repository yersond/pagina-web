import {Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {serviciosBodega} from '../../../../../../serviciosBodega/bodega.service';
import {Router} from '@angular/router';

@Component({
  selector: 'mostrarElemento',
  templateUrl: './mostrarElemento.component.html',
  styleUrls:['./mostrarElemento.component.css'],
  providers:[serviciosBodega]

})

export class mostrarElementoComponent {
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