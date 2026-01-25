import { Component, Signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { filter,  shareReplay, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-rxjs-item-detail-without-select-with-signal',
  imports: [FormsModule],
  templateUrl: './rxjs-item-detail-without-select-with-signal.html',
  styleUrl: './rxjs-item-detail-without-select-with-signal.css',
})
export class RxjsItemDetailWithoutSelectWithSignal {

  public itemDetails: Signal<ItemDetailDto | undefined>;

  public starredItem: Signal<StarredItemDto | undefined>;

  constructor(private dataService: DataService) {

    this.starredItem = toSignal(this.dataService.getStarredItem().pipe(shareReplay(1)));
    this.itemDetails = toSignal( toObservable(this.starredItem).pipe(filter(starredItem => starredItem?.id !== undefined), switchMap(starredItem => this.dataService.getItemDetails(starredItem!.id))));
  }
}
