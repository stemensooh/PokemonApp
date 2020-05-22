import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { GeneralModel } from '../../models/generalModel';
import { map, tap } from 'rxjs/operators';
import { DetallePokemonModel } from '../../models/detallePokemonModel';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SearchModel } from '../../models/searchModel';
import { PokemonModel } from '../../models/pokemonModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: GeneralModel = new GeneralModel();
  public details: DetallePokemonModel[] = [];
  public search: SearchModel;

  constructor(private pokemonService: PokemonService, private _router: Router) {
    this.InicializarDatos(100);
  }

  ngOnInit() {
    this.search = new SearchModel();
  }

  InicializarDatos(limit: number)
  {
    this.pokemonService.CargarPokemones(limit)
      .subscribe((data: any) => {
        this.data = data;
        this.CargarDataPokemon(data);
        console.log(this.data);
      });
  }

  CargarDataPokemon(data: GeneralModel) {
    
    let details: DetallePokemonModel[] = [];
    if (data.results.length > 0) {
      data.results.forEach(x => {
        this.pokemonService.CargarDetallePokemon(x.name).subscribe((res: any) => {
          details.push(res);
        });
      });

      this.data.detaile_pokemon = details;
      // console.log(details);
    }
    else {
      console.log('Data vacio');
    }
    this.data.detaile_pokemon = details;
    return details;
  }

  public verDetalles(pokemon: string)
  {
    // console.log(pokemon);
    this._router.navigate(['/home',pokemon]);
  }

  public BuscarPokemon(form: NgForm )
  {
    console.log(this.search);
    // if(form.invalid){
    //   return ;
    // }
    if(!this.search.name)
    {
      this.InicializarDatos(this.search.limit);
    }
    else{
      this.pokemonService.CargarPokemones(1000)
      .subscribe((data: any) => {
        this.data = data
        console.log(this.data);
        let val: PokemonModel[] = [];
        
        this.data.results.forEach(x => {
          if(x.name.indexOf(this.search.name ) >= 0 ? true : false)
          {
            val.push(x);
          }
        });
        this.data.results = val;
        // this.data.results = this.data.results.filter(x => x.name === this.search.name)
        if(this.data.results.length > 0)
        {
          this.CargarDataPokemon(this.data);
        }
      });
    }
  }
}
