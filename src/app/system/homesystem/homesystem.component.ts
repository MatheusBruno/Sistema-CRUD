import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterFormService } from 'src/app/service/register-form.service';
import { LoginFormService } from 'src/app/service/login-form.service';
import { Register } from 'src/Register';

@Component({
  selector: 'app-homesystem',
  templateUrl: './homesystem.component.html',
  styleUrls: ['./homesystem.component.css']
})
export class HomesystemComponent implements OnInit {

  idUrl? : number;
  diceLogin! : Register;

  constructor(private urlId : ActivatedRoute, private serverRegister : RegisterFormService, private serverLogin : LoginFormService) { 
    this.idUrl = this.serverLogin.diceUserLogin.id;
    this.serverRegister.getDice(this.idUrl!).subscribe((dice) => {
      this.diceLogin = dice;
    })
  }

  ngOnInit(): void {
  }

  verificartion(){
    if(this.diceLogin.nivel?.nivel == 1){
      return true;
    }else{
      return false;
    }
  }

}
