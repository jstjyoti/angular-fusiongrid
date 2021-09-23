import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FusionGridModule } from 'fusion-grid';

import FusionGrid from '@fusioncharts/fusiongrid';

FusionGridModule.setFGRoot(FusionGrid);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
