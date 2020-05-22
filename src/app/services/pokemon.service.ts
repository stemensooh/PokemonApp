import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralModel } from '../models/generalModel';
import { DetallePokemonModel } from '../models/detallePokemonModel';

const URL_DEFAUL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  data: GeneralModel = new GeneralModel();

  constructor(private _http: HttpClient) { }

  CargarPokemones(limit: number) {
    let url = URL_DEFAUL + 'pokemon/' + '?offset=5&limit=' + limit;
    console.log(url);
    return this._http.get(url);
  }

  CargarDetallePokemon(id: string) {
    let url = URL_DEFAUL + 'pokemon/' + id;
    return this._http.get(url);
  }

  CargarDatoAdicional(url: string) {
    return this._http.get(url);
  }

  CargarDetallePokemon2(id: string) {
    return this._http.get(URL_DEFAUL + 'pokemon/' + id);
  }

}
