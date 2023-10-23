import { Injectable } from '@angular/core';
import { CvComponent } from './cvMaster/cv/cv.component';
import { Candidat } from './cvMaster/models/candidat';

@Injectable({
  providedIn: 'root'
})
export class CvService {
private listcandidat:Candidat[]=[];
  constructor() { 
   
    this.listcandidat.push(new Candidat(1,"ines","belhareth","src1.png","etudiant"));
    this.listcandidat.push(new Candidat(2,"ahmed","belhareth","src2.png","etudiant"));
    this.listcandidat.push(new Candidat(3,"amal","nouioui","src3.png","etudiant"));
    this.listcandidat.push(new Candidat(4,"sarra","rouahi","src4.png","etudiant"));
  
  }
  // showalert()
  // {
  //   alert("hello");
  // }
  loaddata()
  {
    return this.listcandidat;
  }
    
}
