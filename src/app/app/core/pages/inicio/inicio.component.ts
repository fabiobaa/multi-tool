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
    // this._indexedDB.initDb();
    // this._indexedDB.addRegistro({Nombre:"Fabian", Apellido:"Obando"});
    this._indexedDB.addRegistro({Id: 1, Nombre:"Lina", Apellido:"Rojas"},"prueba");
    // console.log(this._indexedDB.getRegistros());
  }

  
}
