import { Component, Signal } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from '../services/data.service';
import { ItemDto } from '../dtos/item-dto';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs-loading-with-signal',
  imports: [],
  templateUrl: './rxjs-loading-with-signal.html',
  styleUrl: './rxjs-loading-with-signal.css',
})
export class RxjsLoadingWithSignal {
  public itemDtosWrappedWithLoadState! : Signal<{ loaded: boolean; items: ItemDto[]}>;

  constructor(private dataService: DataService) {
    this.itemDtosWrappedWithLoadState = toSignal(this.dataService.getItems().pipe(map((items) =>({ loaded: true, items })), startWith({ loaded: false, items: [] })), { requireSync: true });
  }
}
