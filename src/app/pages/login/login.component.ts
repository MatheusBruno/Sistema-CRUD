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

  registerObj! : Register;
  objLoginJson : Register[] = [];
  btnRegister = 'Registar';

  verificabotao(){
    this.verificationlogin = false;
  }

  constructor( private serverRegister : RegisterFormService, private url: Router, private serverLogin : LoginFormService ) {
    this.seachdb();
  }

  ngOnInit(): void {
    this.serverLogin.submitlogin = false;
    this.serverLogin.diceUserLogin = this.registerObj;
  }

  seachdb(){
    this.serverLogin.acessAccountLogin().subscribe((x) => this.objLoginJson = x );
  }

  statusdb(){
    console.log(this.objLoginJson);
  }

  verificationJoinLogin(register : Register){
    this.objLoginJson.forEach(dice => {
      if(register.email.toLowerCase() == dice.email.toLowerCase() && register.senha.toLowerCase() == dice.senha.toLowerCase()){
        alert('Seja Bem Vindo ' + dice.nome + '!');
        this.url.navigate([`/system/homesystem`]);
        this.serverLogin.diceUserLogin = dice;
        this.serverLogin.submitlogin = true;
        console.log('Entrou');
      }
    });
  }

  async createItem(register : Register){
    
    this.serverRegister.toSaveRegister(register).subscribe();

    alert('Cadastro realizado com SUCESSO!')
    this.url.navigate(['/'])
    
  }

}
