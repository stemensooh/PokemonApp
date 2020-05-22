import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// For MDB Angular Free
import { ChartsModule, WavesModule, MDBBootstrapModule  } from 'angular-bootstrap-md'

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NoimagenPipe } from './pipes/noimagen.pipe';
import { DetailComponent } from './components/detail/detail.component';
import { CarouselDirective } from './directives/carousel.directive';
import { NgbCrouselDirective } from './directives/ngb-crousel.directive';
import { PokemonService } from './services/pokemon.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NoimagenPipe,
    DetailComponent,
    CarouselDirective,
    NgbCrouselDirective,
    PokemonComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    WavesModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
