import {Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {serviciosBodega} from '../serviciosBodega/bodega.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']

})

export class loginComponent {
  public user: string = '';
  public pass: string = '';
  constructor(private _login: serviciosBodega, private router:Router){}

  login(){
    this._login.ingresar(this.user, this.pass).subscribe(
      Response =>{
        if(Response.data == 1 ){
          this.router.navigate(['login/paginaInicio']);
        }else{
          alert("datos incorrectos");
        }

        },err =>{

        }, () => {

        }
    );
  }

  
}
