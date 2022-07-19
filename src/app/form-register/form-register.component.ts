import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/Register';
import { RegisterFormService } from '../service/register-form.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Register>();

  @Input() btntext = '';
  @Input() diceRegisterEdit! : Register;
  diceDeliver : Register[] = [];

  formRegister! : FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formEdit();
  }

  formEdit(){
    /* OBS: Para FormGroup reconhecer objeto Register é necessario que a
    tela primaria(Component Pai ou que recebe os dados) tenha um chamada do atributo que envia os dados
    para que assim seja feito a chamada no atributo filho(@Input)*/
    this.formRegister = new FormGroup({
      id: new FormControl(''),
      email: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.email : '',Validators.required),
      senha: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.senha : ''),
      nome: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.nome :'',Validators.required),
      cpf: new FormControl(this.diceRegisterEdit? this.diceRegisterEdit.cpf :'',Validators.required)
    });
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
    

    if(this.formRegister.invalid){
      console.log('Não Salvou!');
      return;
    }

    this.onSubmit.emit(this.formRegister.value);
    console.log('Salvou');

  }

}
