import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class SortService {

   public speed: number = 100;

  public changeWidthSubject: Subject<number> = new Subject<number>();

   constructor() { }

   /* QUICKSORT */

   /**
    * Quick sort algorithm
    * 
    * @param list List of items to sort
    */
   public quicksort(list: number[]) {

   }

   /* BUBBLE SORT */

   /**
    * Bubble sort algorithm
    * 
    * @param list List of items to sort
    */
   public bubbleSort(list: number[]) {
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
               }, (i * this.speed + j * this.speed)
            )
         }

      }
   }
}
