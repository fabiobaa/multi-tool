import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import { Copia } from '../../class/copia/copia.class';
import { MultiToolDB } from '../../interface/multiToolDB.interface';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private db!: Promise<IDBPDatabase<MultiToolDB>>;
  constructor() {
    this.initDB();
  }

  private async initDB() {
    this.db = openDB<MultiToolDB>('multitool', 2, {
      upgrade(db) {
        const categoriaStore =  db.createObjectStore('categoria', { keyPath: 'idCategoria', autoIncrement: true });
        const copiaStore =  db.createObjectStore('copia', { keyPath: 'idCopia', autoIncrement: true  });
      },
    });
  }

  public async getDb(): Promise<IDBPDatabase<MultiToolDB>> {
    return this.db;
  }
}


