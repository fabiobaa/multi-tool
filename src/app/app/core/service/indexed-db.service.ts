import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private DB_NAME = 'multitool';
  private DB_VERSION = 1;
  private db!: IDBDatabase;

  constructor() { }

  public initDb() {
    const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

    request.onupgradeneeded = (event) => {
      this.db = (event.target as any).result;
      const objectStore = this.db.createObjectStore('mi_objeto', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('nombre', 'nombre', { unique: false });
    };

    request.onerror = (event) => {
      console.log('Error al abrir la base de datos', event);
    };

    request.onsuccess = (event) => {
      this.db = (event.target as any).result;
      console.log('Base de datos abierta correctamente');
    };
  }

  public addRegistro(registro: any, tableName:string) {
    const transaction = this.db.transaction([tableName], 'readwrite');
    const objectStore = transaction.objectStore(tableName);
    const request = objectStore.add(registro);
  
    request.onerror = (event) => {
      console.log('Error al añadir el registro', event);
    };
  
    request.onsuccess = (event) => {
      console.log('Registro añadido correctamente');
    };
  }

  public getRegistros(tableName:string) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([tableName], 'readonly');
      const objectStore = transaction.objectStore(tableName);
      const request = objectStore.getAll();
  
      request.onerror = (event) => {
        console.log('Error al leer los registros', event);
        reject(event);
      };
  
      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  }
 
  public deleteRegistro(id: number, tableName:string) {
    const transaction = this.db.transaction([tableName], 'readwrite');
    const objectStore = transaction.objectStore(tableName);
    const request = objectStore.delete(id);
  
    request.onerror = (event) => {
      console.log('Error al eliminar el registro', event);
    };
  
    request.onsuccess = (event) => {
      console.log('Registro eliminado correctamente');
    };
  }
  
}
