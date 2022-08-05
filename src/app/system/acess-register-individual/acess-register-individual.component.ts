import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterFormService } from 'src/app/service/register-form.service';
import { Register } from 'src/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acess-register-individual',
  templateUrl: './acess-register-individual.component.html',
  styleUrls: ['./acess-register-individual.component.css']
})
export class AcessRegisterIndividualComponent implements OnInit {

  diceIndividual! : Register;
  btnText = 'Editar';
  numberId! : number;
  page : number = 1;

  constructor(private urldice : ActivatedRoute, private serverRegister : RegisterFormService, private routa : Router) {
  }

  ngOnInit(): void {
    this.numberId = Number(this.urldice.snapshot.paramMap.get('id'));
    this.serverRegister.getDice(this.numberId).subscribe((dice) => {
      this.diceIndividual = dice;
    });
  }

  setDice(register : Register){
    this.serverRegister.setDice(this.numberId,register).subscribe();
    this.routa.navigate([`/system/homesystem`]);
    // /system/homesystem/
  }

}
