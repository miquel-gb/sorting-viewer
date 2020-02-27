import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tile-viewer',
  templateUrl: './tile-viewer.component.html',
  styleUrls: ['./tile-viewer.component.scss']
})
export class TileViewerComponent implements OnInit {

   @ViewChild('tileContainer') tileContainer: ElementRef;

   @Input()
   public tiles: number[];

   public loading: boolean = true;

   public tileWidth: number;

  constructor() { }

  public ngOnInit() {
     this.tileWidth = this._calcWidth();
     this.loading = false;
  }

  private _calcWidth(): number {
    let containerWidth = this.tileContainer.nativeElement.offsetWidth - 6;
    return containerWidth / this.tiles.length - 6; // 6 is between-tiles margin
  }

}
