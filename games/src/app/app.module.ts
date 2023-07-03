import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessComponent } from './chess/chess.component';
import { ChessboardComponent } from './chess/chessboard/chessboard.component';
import { SquareComponent } from './chess/chessboard/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessComponent,
    ChessboardComponent,
    SquareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
