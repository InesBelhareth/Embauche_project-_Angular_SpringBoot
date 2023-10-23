import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnel } from './Personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelApiService {
 adr="http://localhost:8080";
  constructor(private http:HttpClient) { }
  consulterPersonnel():Observable<any>
  {
  return this.http.get(this.adr+"/afficherpersonnel");
  }
  ajouterPersonnel(personnel:Personnel):Observable<any>
  {
  return this.http.post(this.adr+"/ajouterpersonnel",personnel);
  }
  // supprimerPersonnel(id:number):Observable<any>
  // {
  // return this.http.delete(this.adr+"/supprimerpersonnel/"+id);
  // }
  // modifierPersonnel(personnel:Personnel):Observable<any>
  // {
  // return this.http.put(this.adr+"/modifierpersonnel",personnel);
  // }
}
