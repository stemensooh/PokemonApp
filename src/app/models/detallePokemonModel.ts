import { PokemonModel } from './pokemonModel';
import { EspecieModel } from './especieModel';

export class DetallePokemonModel
{
    abilities: AbilitiesModel[];
    base_experience: number;
    forms: PokemonModel[];
    game_indices: GameIndicesModel[];
    height: number;
    held_items: string[];
    id: number;
    is_default: string;
    location_area_encounters: string;
    moves: MoveModel[];
    name: string;
    order: number;
    species: Specie;
    sprites: SpriteModel;
    stats: statModel[];
    types: TypeModel[];
    weight: number;
}

class Specie{
    name: string;
    url: string;
    specie: EspecieModel;
}

export class AbilitiesModel
{
    ability: PokemonModel
    is_hidden: boolean;
    slot: number;
}

export class GameIndicesModel
{
    game_index: number;
    version: PokemonModel;
}

export class MoveModel{
    move: PokemonModel;
    version_group_details: VersionGroupModel[]
}

export class VersionGroupModel{
    level_learned_at: number;
    move_learn_method: PokemonModel;
    version_group: PokemonModel;
}

export class SpriteModel
{
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export class statModel{
    base_stat: number;
    effort: number;
    stat: PokemonModel;
}

export class TypeModel
{
    slot: number;
    type: PokemonModel;
}