import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { ExampleCode } from '../example-code/example-code';
import { map, startWith } from 'rxjs';
import { DataService } from '../services/data.service';
import { ItemDto } from '../dtos/item-dto';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'signal-rxjs-loading',
  imports: [ExampleCode],
  templateUrl: './signal-rxjs-loading.html',
  styleUrl: './signal-rxjs-loading.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class SignalRxjsLoading {
  public itemDtosWrappedWithLoadState! : Signal<{ loaded: boolean; items: ItemDto[]}>;

  constructor(private dataService: DataService) {
    this.itemDtosWrappedWithLoadState = 
        toSignal(this.dataService.getItems().pipe(map((items) =>({ loaded: true, items })), startWith({ loaded: false, items: [] })), { requireSync: true });
        //test
  }
}
