import { Injectable } from '@angular/core';
import { Register } from 'src/Register';
import { Observable, take } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  baseUrl = "http://localhost:3000/register";

  constructor( private http: HttpClient) { }

  toSaveRegister(register : Register):Observable<Register>{
    return this.http.post<Register>(this.baseUrl, register).pipe(take(1));
  }

  getDices():Observable<Register[]>{
    return this.http.get<Register[]>(this.baseUrl);
  }

  getDice(id:number):Observable<Register>{
    return this.http.get<Register>(`${this.baseUrl}/${id}`);
  }

  setDice(id:number,formRegister : Register): Observable<Register>{
    const urlIdDice = `${this.baseUrl}/${id}`;
    return this.http.put<Register>(urlIdDice,formRegister);
  }

  deleteDice(id:number){
    const urlIdDice = `${this.baseUrl}/${id}`;
    return this.http.delete(urlIdDice);
  }

}
