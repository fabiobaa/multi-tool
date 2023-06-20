import { Injectable } from '@angular/core';
import { IDBPDatabase } from 'idb';
import { Categoria } from '../../class/categoria/categoria.class';
import { IndexedDBService } from "./indexed-db.service";
import { MultiToolDB } from "src/app/app/interface/multiToolDB.interface";

@Injectable({
  providedIn: 'root'
})

export class CategoriaDBService {

  private db!: Promise<IDBPDatabase<MultiToolDB>>;

  constructor(private _indexedDB: IndexedDBService) {
    this.db = this._indexedDB.getDb();
  }
  async obtenerCategoria(idCategoria: number): Promise<Categoria| undefined> {
    return (await this.db).get('categoria', idCategoria);
  }

  async obtenerCategorias(): Promise<Categoria[]> {
    return (await this.db).getAll('categoria');
  }

  async agregarCategoria(categoria: Categoria): Promise<number> {
   return (await this.db).add('categoria', categoria);
  }

  async actualizarCategoria(categoria: Categoria): Promise<number> {
    return (await this.db).put('categoria', categoria);
  }

  async eliminarCategoria(idCategoria: number): Promise<void> {
    return (await this.db).delete('categoria', idCategoria);
  }
}

