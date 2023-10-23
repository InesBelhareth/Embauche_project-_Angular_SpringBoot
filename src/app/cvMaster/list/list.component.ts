import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  //provide cvservice in component
  // providers:[CvService]
})
export class ListComponent implements OnInit {
  @Output() candidatSelectedToCv=new EventEmitter();
ngOnInit(): void {
 
}
@Input() listcandidatfromcv:Candidat[]=[];
envoyercandidat(candidat:any){
this.candidatSelectedToCv.emit(candidat);
}

}
