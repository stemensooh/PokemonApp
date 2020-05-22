import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DetallePokemonModel } from 'src/app/models/detallePokemonModel';
import { Carousel } from 'bootstrap';
import { PokemonModel } from '../../models/pokemonModel';
import { Chain } from '../../models/EvolucionModel';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public chartType: string = 'radar';
  public chartDatasets: any[] = [];
  public chartLabels: any[] = [];

  public data: DetallePokemonModel = new DetallePokemonModel();
  public evolution: PokemonModel[] = [];

  constructor(private pokemonService: PokemonService, private _router: ActivatedRoute, private _route: Router) {
    
   
    this._router.params.subscribe(params => {
      this.pokemonService.CargarDetallePokemon(params['name'])
        .subscribe((data: any) => {
          let labels: string[] = [];
          let stat: number[] = [];
          this.data = data;
          this.CargarEspecie(this.data.species.url);
          this.LiberarLista(this.chartLabels);
          this.data.stats.forEach(x => {
            stat.push(x.base_stat);
            labels.push(x.stat.name);
          });

          this.chartDatasets = [{ data: stat, label: 'Stats' }];
          this.chartLabels = labels;
        });
    });
  }

  public CargarEspecie(url: string) {
    this.LiberarLista(this.evolution);
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
      this.pokemonService.CargarDetallePokemon(name)
        .subscribe((data: any) => {
          let pok = this.evolution.filter(x => x.name === name);
          if(pok.length === 0)
          {
            this.evolution.push({name: name, url: '' + name, imagen:  data.sprites.front_default});
          }
        }
      );
    }
  }

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  public CargarDetalles(pokemon: string) {
    this.LiberarLista(this.evolution);
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
