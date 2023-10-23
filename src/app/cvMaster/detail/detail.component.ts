import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { EmbaucheService } from 'src/app/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private service:EmbaucheService){}
  @Input() candidatParCv:Candidat=new Candidat();
  embauchercandidat()
  {this.service .embaucher(this.candidatParCv);

  }


}
