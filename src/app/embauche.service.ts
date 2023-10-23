import { Injectable } from '@angular/core';
import { Candidat } from './cvMaster/models/candidat';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private candidatEmb:Candidat[]=[];

  constructor() { }
  getEmbauche()
  {return this.candidatEmb}
  embaucher(candidat:Candidat)
  {
    const index =this.candidatEmb.indexOf(candidat)
    if (index<0)
    {
this.candidatEmb.push(candidat);

    }
    else
    {
      Swal.fire(' Deja embaucher')

    }
  }
  debaucher(candidat:Candidat)
  {
    const index=this.candidatEmb.indexOf(candidat)
    if (index>=0)
    {
      this.candidatEmb.splice(index,1);
    }
  }
}
