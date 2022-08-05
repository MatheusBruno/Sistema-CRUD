import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/Register';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  @Output() enviaDados = new EventEmitter<Register>();

  @Input() objVerificationEmail : Register[] = [];

  dadosForm! : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.dadosForm = new FormGroup ({
      email: new FormControl('',Validators.required),
      senha: new FormControl('')
    })
  }

  get verificationEmail(){
    return this.dadosForm.get('email');
  }

  get verificationSenha(){
    return this.dadosForm.get('senha');
  }

  submit(){

    if(this.verificationEmail?.invalid && this.verificationSenha?.invalid){
        alert('Informe os dados!');
        return;
      }else{
        console.log('Primeiro Estagio de Verificação');
        this.enviaDados.emit(this.dadosForm.value);
      }

  }
}
