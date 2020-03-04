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
      this._quicksort(list, 0, list.length - 1);
   }


   private _quicksort(list: number[], low: number, high: number) {
      if (low < high) {
         setTimeout(
            () => {
               /* pi is partitioning index, list[pi] is 
                        now at right place */
               let pi = this.partition(list, low, high);

               // Recursively sort elements before 
               // partition and after partition 
               this._quicksort(list, low, pi - 1);
               this._quicksort(list, pi + 1, high);
            }, (1)
         );
      }
   }


   private partition(list: number[], low: number, high: number): number {
      let pivot: number = list[high];
      let i: number = (low - 1); // index of smaller element 
      for (let j: number = low; j <= high - 1; j++) {
         // If current element is smaller than or 
         // equal to pivot 
         if (list[j] <= pivot) {
            i++;
            // swap list[i] and list[j] 
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
         }
      }

      // swap list[i+1] and list[high] (or pivot) 
      let temp = list[i + 1];
      list[i + 1] = list[high];
      list[high] = temp;

      return i + 1;
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
               }, (1)
            );
         }

      }
   }

   /* MERGE SORT */

   public mergeSort(list: number[]) {
      // const myClonedArray  = Object.assign([], list);
      // list = this._mergeSort(myClonedArray);
      // console.log(this._mergeSort(myClonedArray));
   }

   // Merge Sort Implentation (Recursion)
   private _mergeSort(unsortedArray) {
      // No need to sort the array if the array only has one element or empty
      if (unsortedArray.length <= 1) {
         return unsortedArray;
      }
      // In order to divide the array in half, we need to figure out the middle
      const middle = Math.floor(unsortedArray.length / 2);

      // This is where we will be dividing the array into left and right
      const left = unsortedArray.slice(0, middle);
      const right = unsortedArray.slice(middle);

      let a = this.merge(
         this._mergeSort(left), this._mergeSort(right)
      );
      // Using recursion to combine the left and right
      return a;
   }

   // Merge the two arrays: left and right
   public merge(left, right) {
      let resultArray = [], leftIndex = 0, rightIndex = 0;

      // We will concatenate values into the resultArray in order
      while (leftIndex < left.length && rightIndex < right.length) {
         if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
         } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
         }
      }

      // We need to concat here because there will be one element remaining
      // from either left OR the right
      return resultArray
         .concat(left.slice(leftIndex))
         .concat(right.slice(rightIndex));
   }

}
