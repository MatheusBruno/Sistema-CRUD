import { Component, OnInit } from '@angular/core';
import { Register } from 'src/Register';
import { RegisterFormService } from 'src/app/service/register-form.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-window-register',
  templateUrl: './window-register.component.html',
  styleUrls: ['./window-register.component.css']
})
export class WindowRegisterComponent implements OnInit {

  registerClient! : Register[];

  constructor( private serverRegister : RegisterFormService, private url : Router ) {
    this.getDiceRegister();
  }

  ngOnInit(): void {
  }

  getDiceRegister(){
    this.serverRegister.getDices().subscribe((x) => this.registerClient = x);
  }

  submitIdEdit(id : any){
    this.url.navigate([`system/pagedit/${id}`]);
  }

  async deleteDice( id : any){
    await this.serverRegister.deleteDice(id).subscribe();
    alert('Registro Deletado');
    window.location.reload();
  }

}
