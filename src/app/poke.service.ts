import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

import { Pokemon } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  pokemon : Pokemon[]=[];
  private baseInfoUrl : string = 'https://pokemon.wikia.com/wiki/';

  /**
   * Inject the HTTP service.
   */
  constructor(private http: HttpClient) { }

  /**
   * Method that fetches data from
   * the Pokémon API.
   */
  getPokes(offset: number, limit: number) {
    return this.http.get<any>(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((item)=>{
          for (let i = 0; i <= limit; i++){
            const pokeObj = new Pokemon(
              i + offset,
              `${this.baseSpriteUrl}${i+1}.png`,
              item.results[i].name,
              `${this.baseInfoUrl}${item.results[i].name}`
            )
            this.pokemon.push(pokeObj);
          }
          
          return (this.pokemon);

        })
      )
    }
}
