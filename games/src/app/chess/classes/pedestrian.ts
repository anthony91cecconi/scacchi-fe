import { Piece } from "./piece";
import { Pieces } from "./pieces";

export class Pedestrian implements Piece{
  name: Pieces;
  clones: number;
  positionX: string;
  positiony: number;
  color: boolean;
  constructor(name: Pieces, clones : number, positionX : string, positionY : number, color : boolean){
    this.positionX = positionX;
    this.positiony = positionY;
    this.color = color;
    this.clones = clones;
    this.name = Pieces.PEDESTRIAN;
  }


}
