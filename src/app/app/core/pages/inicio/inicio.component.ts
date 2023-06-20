import { Component, OnInit } from '@angular/core';
import { IndexedDBService } from "../../service/indexed-db.service";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  constructor(private _indexedDB: IndexedDBService ) { 
   
   }
  ngOnInit() {
  
  }

  
}
