import { Component, OnInit } from '@angular/core';
import { PersonnelApiService } from '../personnel-api.service';
import { Personnel } from '../Personnel';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit{
  listepersonnelFromConsulte: Personnel[]=[];

  constructor(private serviceapi:PersonnelApiService ){

  }
  ngOnInit(): void {
    this.serviceapi.consulterPersonnel().subscribe({
      next:(data)=>
      {
this.listepersonnelFromConsulte=data;
      },
     error:(errr)=>
    {
      console.log(errr);
    }

    });
  }


}
