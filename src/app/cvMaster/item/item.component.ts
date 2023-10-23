import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() candidat:Candidat=new Candidat();
  @Output() candidatSelectedToList=new EventEmitter();//event

  ngOnInit(): void {
  }
  sendCandidatToList()
  {
this.candidatSelectedToList.emit(this.candidat);
  }
  

}
