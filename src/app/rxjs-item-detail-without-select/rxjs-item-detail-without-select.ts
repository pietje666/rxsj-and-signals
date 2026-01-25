import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, shareReplay, Subject, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';


@Component({
  selector: 'app-rxjs-item-detail-without-select',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './rxjs-item-detail-without-select.html',
  styleUrl: './rxjs-item-detail-without-select.css',
})
export class RxjsItemDetailWithoutSelect {

  public itemDetails$: Observable<ItemDetailDto>;
  public starredItem$: Observable<StarredItemDto>;

  constructor(private dataService: DataService) {

    this.starredItem$ = dataService.getStarredItem().pipe(shareReplay(1));

    this.itemDetails$ = this.starredItem$.pipe(switchMap(starredItem => {
      return this.dataService.getItemDetails(starredItem.id);
    }));
  }
}
