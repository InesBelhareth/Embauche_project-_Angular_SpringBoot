import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { EmbaucheService } from 'src/app/embauche.service';

@Component({
  selector: 'app-embaucher',
  templateUrl: './embaucher.component.html',
  styleUrls: ['./embaucher.component.css']
})
export class EmbaucherComponent implements OnInit {
  candidatEm:Candidat[] =[];
  constructor(private service:EmbaucheService){}
  ngOnInit(): void {
this.candidatEm= this.service.getEmbauche()  }


debaucher(candidat:Candidat)
{this.service.debaucher(candidat);

}}
