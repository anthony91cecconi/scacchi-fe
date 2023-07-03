import { Pieces } from "./pieces";

export class Piece{
  name! : Pieces;
  positionX! : string;
  positiony! : number;

  //true is black, white is false
  color! : boolean;
}
