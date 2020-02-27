import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { TileViewerComponent } from './components/tile-viewer/tile-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TileViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
