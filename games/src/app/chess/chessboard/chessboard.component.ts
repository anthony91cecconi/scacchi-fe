import { Square } from '../classes/Square';
import { ChessService } from './../chess.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent {

  table! : Square[];
  constructor(public service: ChessService){
    this.table = service.table;
    console.log(this.table , service.table)
  }

}
