import { PokemonModel } from './pokemonModel';
export class EvolucionModel
{
    baby_trigger_item : string ;
    chain :Chain;
    id : number;
}

export class Chain 
{
    evolution_details: Evolution_detail[ ];
    evolves_to: Chain[];
    is_baby: boolean;
    species: PokemonModel;
}

export class Evolution_detail{
    gender: any;
    held_item: any;
    item: any;
    known_move: any;
    known_move_type: any;
    location: any;
    min_affection: any;
    min_beauty: any;
    min_happiness: any;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species: any;
    party_type: any;
    relative_physical_stats: any;
    time_of_day: string;
    trade_species: any;
    trigger: PokemonModel;
    turn_upside_down: boolean;
}