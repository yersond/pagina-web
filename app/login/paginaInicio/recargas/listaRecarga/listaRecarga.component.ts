import {Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {serviciosBodega} from '../../../../serviciosBodega/bodega.service';
import {Router} from '@angular/router';

@Component({
  selector: 'listaRecarga',
  templateUrl: './listaRecarga.component.html',
  styleUrls:['./listaRecarga.component.css'],
  providers:[serviciosBodega]
})

export class listaRecargaComponent {
  listaRecargas: Array<object> = null;
  constructor(private servicios: serviciosBodega){ }
  ngOnInit(){
    this.servicios.listarRecargas().subscribe(
      resultado =>{
        console.log(resultado[0].NumeroCel);
        this.listaRecargas = resultado;

      }
    )
  }

  
}