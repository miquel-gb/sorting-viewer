import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   public values: number[] = [];

   private _valuesAmount: number = 60;

   private _speed: number = 250;

   constructor() {

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
      this._bubbleSort(this.values);
   }

   private _bubbleSort(list: number[]) {
      let n = list.length;

      for (let i = 0; i < n - 1; i++) {
         for (let j = 0; j < n - i - 1; j++) {
            setTimeout(
               () => {
                  if (list[j] > list[j + 1]) {
                     let temp = list[j];
                     list[j] = list[j + 1];
                     list[j + 1] = temp;
                  }
               }, (i * this._speed + j * this._speed)
            )
         }

      }
   }
}
