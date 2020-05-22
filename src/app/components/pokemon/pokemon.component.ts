import { Component, OnInit } from '@angular/core';
import { DetallePokemonModel } from 'src/app/models/detallePokemonModel';
import { PokemonModel } from 'src/app/models/pokemonModel';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chain } from '../../models/EvolucionModel';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public chartType: string = 'radar';
  public chartDatasets: any[] = [];
  public chartLabels: any[] = [];

  public data: DetallePokemonModel;
  public evolution: PokemonModel[];

  constructor(private pokemonService: PokemonService, private _router: ActivatedRoute, private _route: Router) {
    let stat: number[] = [];
    this.evolution = [];
    console.log(this.chartDatasets);
    // this.LiberarLista(this.evolution);
    // this.LiberarLista(this.chartDatasets);
    // this.LiberarLista(this.chartLabels);
    this._router.params.subscribe(params => {
      // this.CargarDetalles(params['name']);
      this.pokemonService.CargarDetallePokemon(params['name'])
        .subscribe((data: any) => {
          this.data = data;
          this.CargarEspecie(this.data.species.url);
          // this.LiberarLista(this.evolution);
          // this.LiberarLista(this.chartDatasets);
          // this.LiberarLista(this.chartLabels);
          this.chartDatasets = [];
          this.chartLabels = [];
          this.data.stats.forEach(x => {
            stat.push(x.base_stat);
            this.chartLabels.push(x.stat.name);
          });
          this.chartDatasets.push({ data: stat, label: 'Stats' });
          
          console.log(this.data);
        });
        
    });

    
  }

  public CargarEspecie(url: string) {
    this.pokemonService.CargarDatoAdicional(url).subscribe((data: any) => {
      this.data.species.specie = data;
      this.CargarEvoluciones(this.data.species.specie.evolution_chain.url);
    });
  }

  public CargarEvoluciones(url: string) {
    this.pokemonService.CargarDatoAdicional(url).subscribe((data: any) => {
      this.data.species.specie.evolution_chain.evolution_chain = data;
      this.CargarPokemon(data.chain.species.name);

      this.loadBucle(data.chain.evolves_to);

    });
  }

  public loadBucle(data: Chain[]) {
    data.forEach(x => {
      this.CargarPokemon(x.species.name);
      this.loadBucle(x.evolves_to);
    });
  }

  public CargarPokemon(name: string) {
    if (this.data.name !== name) {
      let pokemon: PokemonModel = new PokemonModel();
      this.pokemonService.CargarDetallePokemon(name)
        .subscribe((data: any) => {
          let pok = this.evolution.filter(x => x.name === data.name);
          if(pok.length === 0)
          {
            pokemon.name = name;
            pokemon.url = '' + name;
            pokemon.imagen = data.sprites.front_default;
            this.evolution.push(pokemon);
          }
        });
    }
  }

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  public CargarDetalles(pokemon: string) {
    // let stat: number[] = [];
    console.log(this.chartDatasets);
    this.LiberarLista(this.evolution);
    // this.LiberarLista(this.chartDatasets);
    // this.LiberarLista(this.chartLabels);
    // this.chartDatasets.splice(0,1);
    // this.chartLabels.splice(0,1);
    // this.evolution.splice(0,1);
    this._route.navigate(['/home', pokemon]);
  }

  private LiberarLista(lista: any[])
  {
    for (let i = 0; i < lista.length; i++) {
      lista.splice(i, 1);
    }
  }

  ngOnInit() {
    
  }


}
