import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { SortService } from 'src/app/services/sort.service';

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

  constructor(private _sortService: SortService) { }

  public ngOnInit() {
    this.tileWidth = this._calcWidth();
    this._sortService.changeWidthSubject.subscribe(
      () => {
        this._calcWidth();
      }
    );
    this.loading = false;
  }

  private _calcWidth(): number {
    let containerWidth = this.tileContainer.nativeElement.offsetWidth - 6;
    return containerWidth / this.tiles.length - 6; // 6 is between-tiles margin
  }

}
