import { Injectable } from '@angular/core';
import { Register } from 'src/Register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  baseUrl = 'http://localhost:3000/register';

  constructor(private http : HttpClient) { }

  acessAccountLogin(): Observable<Register[]>{
    return this.http.get<Register[]>(this.baseUrl);
  }


}
