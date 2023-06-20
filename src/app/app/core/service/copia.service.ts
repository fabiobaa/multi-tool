import { Injectable } from '@angular/core';
import { IDBPDatabase } from 'idb';
import { Copia } from '../../class/copia/copia.class';
import { MultiToolDB } from '../../interface/multiToolDB.interface';
import { CategoriaDBService } from './categoria.service';
import { IndexedDBService } from './indexed-db.service';

@Injectable({
  providedIn: 'root'
})
export class CopiaService {

  private db!: Promise<IDBPDatabase<MultiToolDB>>;
  constructor(private _indexedDB: IndexedDBService, private categoriaDBService: CategoriaDBService) {
    this.db = this._indexedDB.getDb();
  }

  async obtenerCopia(idCopia: number): Promise<Copia | undefined> {
    return (await this.db).get('copia', idCopia);
  }

  async obtenerCopiasPorCategoria(idCategoria: number): Promise<Copia[]> {
    const copias = await (await this.db).getAll('copia');

    copias.forEach(async x => {
      let catgoria = await this.categoriaDBService.obtenerCategoria(x.idCategoria);      
      x.nombreCategoria = catgoria!.nombre;
    });
    return copias.filter(copia => copia.idCategoria === idCategoria);
  }

  async ObtenerCopiasFavoritas(): Promise<Copia[]> {
    const copias = await (await this.db).getAll('copia');
    copias.forEach(async x => {
      let catgoria = await this.categoriaDBService.obtenerCategoria(x.idCategoria);
      if(catgoria!.nombre !== undefined){
        x.nombreCategoria = catgoria!.nombre;
      }      
    });
    return copias.filter(copia => copia.favorito);
  }

  async agregarCopia(copia: Copia): Promise<number> {
    return (await this.db).add('copia', copia);
  }

  async actualizarCopia(copia: Copia): Promise<number> {
    return (await this.db).put('copia', copia);
  }

  async eliminarCopia(idCopia: number): Promise<void> {
    return (await this.db).delete('copia', idCopia);
  }

  async actualizarFavorito(idCopia: number, favorito: boolean): Promise<number> {
    const copia = await (await this.db).get('copia', idCopia);
    if (copia) {
      copia.favorito = favorito;
      return (await this.db).put('copia', copia);
    }
    return 0;
  }

  ordenerxFavorito(copias: Copia[]): Copia[] {
    return copias.sort((a, b) => (b.favorito === a.favorito) ? 0 : b.favorito ? 1 : -1);
  }
}
