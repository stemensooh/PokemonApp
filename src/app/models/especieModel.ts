import { PokemonModel } from './pokemonModel';
import { EvolucionModel } from './EvolucionModel';
export class EspecieModel
{
    base_happiness: number;
    capture_rate: number;
    color: PokemonModel;
    egg_groups: PokemonModel[];
    evolution_chain: Evolution;
    evolves_from_species: PokemonModel;
    flavor_text_entries: Flavor_text_entrie[];
    form_descriptions: [];
    forms_switchable: true;
    gender_rate: number;
    genera: Genera[];
    generation: PokemonModel;
    growth_rate: PokemonModel;
    habitat: PokemonModel;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    name: string;
    names: Names[];
    order: number;
    pal_park_encounters: Pal_park_encounter[];
    pokedex_numbers: [];
    shape: PokemonModel;
    varieties: Varietie[];
}

class Varietie{
    is_default: boolean;
    pokemon: PokemonModel;
}

class Pal_park_encounter
{
    entry_number: number;
    pokedex: PokemonModel;
}

class Names{
    language: PokemonModel;
    name: string;
}

class Genera{
    genus: string;
    language: PokemonModel;
}

class Flavor_text_entrie
{
    flavor_text: string;
    language: PokemonModel;
    version: PokemonModel;
}

class Evolution{
    url: string;
    evolution_chain: EvolucionModel
}

