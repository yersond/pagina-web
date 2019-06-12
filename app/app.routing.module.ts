import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { recargasComponent } from './login/paginaInicio/recargas/recargas.component';
import { loginComponent } from './login/login.component';
import { bodegaComponent } from './login/paginaInicio/bodega/bodega.component';
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

const rutas: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'login/paginaInicio/recargas',component: recargasComponent},
  { path: 'login',component: loginComponent},
  { path: 'login/paginaInicio/bodega',component: bodegaComponent},
  { path: 'login/paginaInicio/bodega/registroElemento',component: registroElementoComponent},
  { path: 'login/paginaInicio/bodega/registroElemento/buscarElemento',component: buscarElementoComponent},
  { path: 'login/paginaInicio/bodega/registroElemento/clasificacion',component: clasificacionComponent},
  { path: 'login/paginaInicio/bodega/registroElemento/tipo',component: tipoComponent},
  { path: 'login/paginaInicio/bodega/busquedaES',component: busquedaESComponent},
  { path: 'login/paginaInicio/bodega/busquedaES/consultado',component: consultadoComponent},
  { path: 'login/paginaInicio/bodega/registroElemento/buscarElemento/mostrarElemento',component: mostrarElementoComponent},
  { path: 'login/paginaInicio',component: paginaInicioComponent},
  { path: 'login/paginaInicio/recargas/listaRecarga',component: listaRecargaComponent},
  { path: 'login/paginaInicio/contratacion',component: contratacionComponent},
  { path: 'login/paginaInicio/contratacion/agendarNegociacion',component: agendarNegociacionComponent},
  { path: 'login/paginaInicio/contratacion/contratarEmpresa',component: contratarEmpresaComponent},
  { path: 'login/paginaInicio/contratacion/registrarEmpresa',component: registrarEmpresaComponent}
];
@NgModule({
  imports:[
    RouterModule.forRoot(rutas)
  ],
  exports:[RouterModule]
})
export class appRutasModule{

}