import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { recargasComponent} from './login/paginaInicio/recargas/recargas.component';
import {HttpClientModule} from '@angular/common/http';
import { Router} from '@angular/router';
import { appRutasModule } from './app.routing.module';
import { loginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { bodegaComponent} from './login/paginaInicio/bodega/bodega.component';
import { registroElementoComponent } from './login/paginaInicio/bodega/registroElemento/registroElemento.component';
import { buscarElementoComponent } from './login/paginaInicio/bodega/registroElemento/buscarElemento/buscarElemento.component';
import { clasificacionComponent } from './login/paginaInicio/bodega/registroElemento/clasificacion/clasificacion.component';
import { tipoComponent } from './login/paginaInicio/bodega/registroElemento/tipo/tipo.component';
import { busquedaESComponent } from './login/paginaInicio/bodega/busquedaES/busquedaES.component';
import { consultadoComponent } from './login/paginaInicio/bodega/busquedaES/consultado/consultado.component';
import { mostrarElementoComponent } from './login/paginaInicio/bodega/registroElemento/buscarElemento/mostrarElemento/mostrarElemento.component';
import { paginaInicioComponent} from './login/paginaInicio/paginaInicio.component';
import { listaRecargaComponent } from './login/paginaInicio/recargas/listaRecarga/listaRecarga.component';
import { contratacionComponent } from './login/paginaInicio/contratacion/contratacion.component';
import { agendarNegociacionComponent } from './login/paginaInicio/contratacion/agendarNegociacion/agendarNegociacion.component';
import { contratarEmpresaComponent } from './login/paginaInicio/contratacion/contratarEmpresa/contratarEmpresa.component';
import { registrarEmpresaComponent } from './login/paginaInicio/contratacion/registrarEmpresa/registrarEmpresa.component';
import{serviciosBodega} from './serviciosBodega/bodega.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, appRutasModule ],
  providers:[serviciosBodega],
  declarations: [ AppComponent, HelloComponent, recargasComponent, loginComponent, bodegaComponent, registroElementoComponent, buscarElementoComponent, clasificacionComponent,tipoComponent, busquedaESComponent, consultadoComponent, mostrarElementoComponent, paginaInicioComponent, listaRecargaComponent, contratacionComponent, agendarNegociacionComponent, contratarEmpresaComponent, registrarEmpresaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
