import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2';
import { Personnel } from '../Personnel';
import { CommonModule } from '@angular/common'; // Importez CommonModule


/*
 * @title Table with pagination
 */

@Component({
    selector: 'app-tableau',
    templateUrl: './tableau.component.html',
    styleUrls: ['./tableau.component.css'],
    imports: [CommonModule],

    standalone: true,
})

export class TableauComponent implements OnInit {
  @Input() listePersonnel:Personnel[]=[];

  

  ngOnInit(): void {
console.log(this.listePersonnel)  }
  
  
  }
  
 
  
  



