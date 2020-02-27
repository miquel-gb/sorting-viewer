import { Component, OnInit } from '@angular/core';
import { SortService } from './services/sort.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   public values: number[] = [];

   private _valuesAmount: number = 50;

   constructor(private _sortService: SortService) {

   }

   public ngOnInit() {
      this.generateValues();
   }

   public generateValues() {
      this.values = [];
      for (let i = 0; i < this._valuesAmount; i++) {
         this.values.push(this._getRndInt());
      }
   }

   private _getRndInt() {
      return Math.floor(Math.random() * (1000 - 1)) + 1;
   }

   public sort() {
      this._sortService.bubbleSort(this.values);
   }

}
