import { Component, OnInit } from '@angular/core';
import { Register } from 'src/Register';
import { Router } from '@angular/router';
import { RegisterFormService } from 'src/app/service/register-form.service';
import { LoginFormService } from 'src/app/service/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  verificationlogin: boolean = true;
  
  obterdados = '';

  registerObj : Register[] = [];
  objLoginJson : Register[] = [];
  btnRegister = 'Registar';

  verificabotao(){
    this.verificationlogin = false;
  }

  constructor( private serverRegister : RegisterFormService, private url: Router, private serverLogin : LoginFormService ) {
    this.seachdb();
  }

  ngOnInit(): void {
    
  }

  seachdb(){
    this.serverLogin.acessAccountLogin().subscribe((x) => this.objLoginJson = x );
  }

  statusdb(){
    console.log(this.objLoginJson);
  }

  verificationJoinLogin(register : Register){
    for (let index = 0; index <= this.objLoginJson.length; index++) {
      const objEmail = this.objLoginJson[index].email.toLowerCase();
      const objSenha = this.objLoginJson[index].senha.toLowerCase();
      const objNome = this.objLoginJson[index].nome;

      if(register.email.toLowerCase() == objEmail && register.senha.toLowerCase() == objSenha){
        alert('Seja Bem Vindo ' + objNome + '!');
        this.url.navigate(['/system/homesystem']);
        console.log('Entrou');
        break;
      }

    }
  }

  async createItem(register : Register){
    
    this.serverRegister.toSaveRegister(register).subscribe();

    alert('Cadastro realizado com SUCESSO!')
    this.url.navigate(['/'])
    
  }

}
