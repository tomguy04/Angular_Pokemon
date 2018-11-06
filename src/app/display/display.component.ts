import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
import { Observable } from 'rxjs';
import { Poke } from '../models/poke';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  pokes:Poke[] = [];
  pokemon: Pokemon[] = [];
  constructor(private pokeService : PokeService) { }

  ngOnInit() {
    this.getPokes();
  }

  getPokes(){
  this.pokeService.getPokes(this.pokemon.length, 9)
    .subscribe(pokemon => {
        console.log(pokemon);
        this.pokemon = pokemon;
      });    
  }

  // getPokes(){
  //  this.pokeService.getPokes().subscribe(
  //    pokes => this.pokes = pokes
  //  );
  // }

}
