import { Injectable } from '@angular/core';
import { IndexedDBService } from "./indexed-db.service";
@Injectable({
  providedIn: 'root'
})
export class CopyDBService {


  constructor(private _indexedDB: IndexedDBService ) { 
   this._indexedDB.initDb();
  }


}
