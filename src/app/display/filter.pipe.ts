import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(pokemon: Pokemon[], searchText: string): Pokemon[] {
        if(!pokemon) return [];
        if(!searchText) return pokemon;
        searchText = searchText.toLowerCase();
        return pokemon.filter( hero => {
            return hero.name.toLowerCase().includes(searchText);
        });
    }
}
//narco
//hero ____ narco

//narco dr iq
