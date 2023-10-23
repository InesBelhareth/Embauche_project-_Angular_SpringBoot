import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  constructor(private service:CvService){}
  listcandidat:Candidat[]=this.service.loaddata();
  public candidatselecCv:Candidat=new Candidat();
  /*hajty bech nlanci lfct doub ma ytlaca  lcomponent  donc oninit w puisque intyerface donc feha methode 
  lezm nkmlilha lcorps mteeha */
  ngOnInit(): void {
   
// this.service.showalert()
  }
  /*bech nabeth list hethy li component list donc bil input*/
  // showdata()
  // {
  //   console.log(this.listcandidat);
  // }
  envoyercandidat(candidat:any){
this.candidatselecCv=candidat;
  }
}
