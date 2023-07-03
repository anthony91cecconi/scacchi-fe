import { Injectable } from '@angular/core';
import { Square } from './classes/Square';

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  table!: Square[];

  constructor() {
    this.table = [];
    const stringSupport = ['A','B','C','D','E','F','G','H'];
    let ySupport = 9;
    let colorSupport = 0;
    for (let index = 0; index < (10*10); index++) {
      if( index != 0 && index % 10 == 0){
        colorSupport++;
        ySupport--;
      }

      const item :Square = {
        x: stringSupport[(index % 10)-1],
        y: ySupport,
        show: true,
        color: false,
        walkable: true
      } ;

      if (item.y == 9 && item.x == null || item.y == 0 && item.x == null ) {
        item.show = false;
      }

      if ( item.y != 0 && item.y != 9 && item.x !=null) {
        item.show = false;
      }

      if ((index+colorSupport) % 2 == 0) {
        item.color = true;
      }

      this.table?.push(item)
    }
  }
}
