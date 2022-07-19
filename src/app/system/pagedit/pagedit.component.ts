import { Component, OnInit } from '@angular/core';
import { Register } from 'src/Register';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterFormService } from 'src/app/service/register-form.service';

@Component({
  selector: 'app-pagedit',
  templateUrl: './pagedit.component.html',
  styleUrls: ['./pagedit.component.css']
})
export class PageditComponent implements OnInit {

  diceRegister! : Register;
  btnedit = 'Editar';

  constructor( private serverRegister : RegisterFormService, private linkUrl : ActivatedRoute, private url : Router ) { 
    
  }

  ngOnInit(): void {
    const idUrl = Number(this.linkUrl.snapshot.paramMap.get('id'));
    this.serverRegister.getDice(idUrl).subscribe(dice => { this.diceRegister = dice});
  }

  async updateRegister(register : Register){

    await this.serverRegister.setDice(this.diceRegister?.id!,register).subscribe();
    alert('Alterado Com Sucesso!');
    this.url.navigate(['/system/windowregister']);

  }

  

}
