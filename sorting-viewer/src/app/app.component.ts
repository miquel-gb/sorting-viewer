import { Component, OnInit } from '@angular/core';
import { SortService } from './services/sort.service';
import { Subject } from 'rxjs';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   /**
    * Values list to sort
    */
   public values: number[] = [];
   /**
    * Amount of values to generate into the values list
    */
   public valuesAmount: number = 10; // If entered a value higher than 175 the bars start to be hard to see
   /**
    * Flag to check if the list is already sorted and disable buttons
    */
   public sorted: boolean = false;

   /**
    * Default constructor
    * 
    * @param _sortService referenc to the Sort Service, which contains sorting methods
    */
   constructor(private _sortService: SortService) {

   }

   /**
    * Angular OnInit lifecycle hook, calls the random values list generator
    */
   public ngOnInit() {
      this.generateValues();
   }

   /**
    * Generates an amount equal to valuesAmount of random integers from 1-1000 into the values list
    */
   public generateValues() {
      this.values = [];
      for (let i = 0; i < this.valuesAmount; i++) {
         this.values.push(this._getRndInt());
      }
   }

   /**
    * Returns a random integer between 1 and 1000
    */
   private _getRndInt() {
      return Math.floor(Math.random() * (1000 - 1)) + 1;
   }

   /**
    * Handles the sorting method clicked
    * 
    * @param sortMethod Sorting method selected
    */
   public sort(sortMethod: number = 0) {
      switch (sortMethod) {
         case 0:
            this._sortService.bubbleSort(this.values);
            break;
         case 1:
            this._sortService.quicksort(this.values);
            break;
            case 2:
            this._sortService.mergeSort(this.values);
            break;
         default:
            this._sortService.bubbleSort(this.values);
            break;
      }
      //this._startTimer();
      this.sorted = true;
   }

   public timeLeft: number = 60;
   private _interval;

   private _startTimer() {
      this._interval = setInterval(() => {
         if (this.timeLeft > 0) {
            this.timeLeft--;
         } else {
            this.timeLeft = 60;
         }
      }, 1000);
   }

   private _pauseTimer() {
      clearInterval(this._interval);
   }

   /**
    * Creates a new values list
    */
   public reset() {
      this.generateValues();
      //this._pauseTimer();
      this.sorted = false;
   }

   /**
    * NOT WORKING YET
    */
   public changeAmount() {
      this._sortService.changeWidthSubject.next(this.valuesAmount);
      this.generateValues();
   }
}
