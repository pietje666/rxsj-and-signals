import { ChangeDetectionStrategy, Component, effect, Injector, runInInjectionContext, signal, Signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { shareReplay } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-rxjs-item-detail-without-select-with-signal',
  imports: [FormsModule],
  templateUrl: './rxjs-item-detail-without-select-with-signal.html',
  styleUrl: './rxjs-item-detail-without-select-with-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RxjsItemDetailWithoutSelectWithSignal {

  public itemDetails: Signal<ItemDetailDto | undefined> = signal(undefined);

  public starredItem: Signal<StarredItemDto | undefined>;

  constructor(private dataService: DataService, private injector:  Injector) {

    this.starredItem = toSignal(this.dataService.getStarredItem().pipe(shareReplay(1)));

    effect(() => {
      if(this.starredItem()) {
        runInInjectionContext(this.injector, () => {
          this.itemDetails = toSignal( this.dataService.getItemDetails(this.starredItem()!.id), {injector: this.injector} );
        });
        
      }
    });
  }
}
