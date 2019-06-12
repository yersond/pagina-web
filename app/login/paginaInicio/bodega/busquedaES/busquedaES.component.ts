import {Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {serviciosBodega} from './../../../../serviciosBodega/bodega.service';
import {Router} from '@angular/router';

@Component({
  selector: 'busquedaES',
  templateUrl: './busquedaES.component.html',
  styleUrls:['./busquedaES.component.css'],
  providers:[serviciosBodega]

})

export class busquedaESComponent {
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
