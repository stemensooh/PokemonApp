import { PokemonModel } from './pokemonModel';
import { DetallePokemonModel } from './detallePokemonModel';

export class GeneralModel{
    count: number;
    next: string;
    previous: string;
    results: PokemonModel[];
    detaile_pokemon: Array<DetallePokemonModel>;

    clear(): void {
        this.count = 0;
        this.next = '';
        this.previous = '';
        this.results = [];
        this.detaile_pokemon = [];
    }
}