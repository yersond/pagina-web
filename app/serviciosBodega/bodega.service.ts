import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({'content-Type':'application/json'})

};

@Injectable()
export class serviciosBodega{
  constructor(private http: HttpClient){ }
  listarEntradas(){
    return this.http.get('https://agencia-yadiosa5825339.codeanyapp.com/agregarEntrada.php')
  }
  listarRecargas(){
    return this.http.get('https://agencia-yadiosa5825339.codeanyapp.com/Recargas/BuscarRecarga.php')
  }
  listarElementos(){
    return this.http.get('https://agencia-yadiosa5825339.codeanyapp.com/buscarElemento.php')
  }
  guardarEntrada(datos:Object){
    return this.http.post ('https://agencia-yadiosa5825339.codeanyapp.com/insertarEntrada.php',
    {Fecha:datos['Fecha'],
    Elemento_Id:datos['Elementos_Id'],
    Cantidad:datos['Cantidad'],
    Encargado:datos['Encargado'],
    Clasificacion:datos['Clasificacion'],
    Areas_Id:datos['Areas_Id'],

    },{headers:new HttpHeaders({'content-type':'application/json'})}
    );
  }
  
  ingresar(Usuario, Clave){
  return this.http.post('https://agencia-yadiosa5825339.codeanyapp.com/login.php', {user: Usuario, pass: Clave});
  }
}