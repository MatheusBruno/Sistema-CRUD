import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/Register';
import { RegisterFormService } from '../service/register-form.service';
import { LoginFormService } from '../service/login-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Register>();

  @Input() btntext = '';
  @Input() diceRegisterEdit! : Register;
  @Input() backpage! : number;
  diceUserRegister : Register[] = [];

  txtAlert : boolean = false;

  nivelsystem = [
    {nivel: 0, name: 'User'},
    {nivel: 1, name: 'Admin'}
  ];

  formRegister! : FormGroup;

  constructor( private serverRegister : RegisterFormService, private serverLogin : LoginFormService, private routa : Router ) {
    this.serverRegister.getDices().subscribe((dice) => this.diceUserRegister = dice);
  }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      id: new FormControl(''),
      email: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.email : '',Validators.required),
      senha: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.senha : ''),
      nome: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.nome :'',Validators.required),
      cpf: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.cpf :'',Validators.required),
      nivel: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.nivel : this.nivelsystem[0])
    });
  }

  verificationEdit(){
    if(this.serverLogin.diceUserLogin.nivel?.nivel == 1){
      return true;
    }else{
      return false;
    }
  }
      
  backPage(){
    if(this.backpage == 1){
      this.routa.navigate(['/system/homesystem']);
    }
    if(this.backpage == 2){
      this.routa.navigate(['/system/windowregister']);
    }
  }

  get email(){
    return this.formRegister.get('email')!;
  }

  get nome(){
    return this.formRegister.get('nome')!;
  }

  get cpf(){
    return this.formRegister.get('cpf')!;
  }

  submit(){

    let veri : boolean = true;

    if(this.diceRegisterEdit){

    }else{
      if(this.formRegister.get('cpf')?.value){
        this.diceUserRegister.forEach((dice) => {
          if(this.formRegister.get('cpf')?.value == dice.cpf){
            console.log('Email Repetido');
            this.txtAlert = true;
            return veri = false;
          }else{
            return;
          }
        })
      }
    }

    

    if(this.formRegister.invalid){
      console.log('Não funcio')
      this.txtAlert = false;
      veri = false;
      return;
    }

    if(veri!){
      this.onSubmit.emit(this.formRegister.value);
      console.log('Salvou');
    }else{
      return;
    }
    

  }

}
