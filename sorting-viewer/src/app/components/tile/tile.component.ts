import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-tile',
   templateUrl: './tile.component.html',
   styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

   @Input()
   public value: number;

   @Input()
   public width: number;

   public height: number;


   constructor() { }

   public ngOnInit() {
      this.height = this._calcHeight();
   }

   private _calcHeight(): number {
      return (this.value * 100) / 1000;
   }

}
