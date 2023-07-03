import { Component, Input } from '@angular/core';
import { Square } from '../../classes/Square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() square : Square | undefined;

}
