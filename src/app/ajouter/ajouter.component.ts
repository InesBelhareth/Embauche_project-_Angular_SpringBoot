import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonnelApiService } from '../personnel-api.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  constructor(private service:PersonnelApiService){}
  ajouterPersonnel(form:NgForm)
  {
this.service.ajouterPersonnel(form.value).subscribe(
  {
    next:(data)=>
    {console.log("Data", data)},
    error:(err)=> 
    {console.log('Error', err)},
  }
)  }

}
