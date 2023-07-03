import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessComponent } from './chess/chess.component';
import { ChessboardComponent } from './chess/chessboard/chessboard.component';

const routes: Routes = [
  {path:'chess', component: ChessComponent, children: [
    {path:'chessboard',component: ChessboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
