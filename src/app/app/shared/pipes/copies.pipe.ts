import { Pipe, PipeTransform } from '@angular/core';
import { Copia } from '../../class/copia/copia.class';

@Pipe({
  name: 'copies'
})
export class CopiesPipe implements PipeTransform {

  transform(copias: Copia[], searchText: string): Copia[] {
    if (!searchText) {
      return copias;
    }
    const filteredCopies = [...copias]; // create a copy of the original array
    return filteredCopies.filter(copy => {
      return copy.nombre.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
