import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent {
  constructor(private router:Router){}
  pathajouter()
  {
    const link=["personnel/ajouter"];
    
    this.router.navigate(link);

  }
  pathconsulter()
  {
    const link=["personnel/consulter"];
    
    this.router.navigate(link);
  }

}
