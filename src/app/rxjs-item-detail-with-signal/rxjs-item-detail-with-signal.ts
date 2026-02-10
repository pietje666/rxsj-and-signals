import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { ItemDto } from '../dtos/item-dto';
import { DataService } from '../services/data.service';
import { Subject, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs-item-detail-with-signal',
  imports: [FormsModule],
  templateUrl: './rxjs-item-detail-with-signal.html',
  styleUrl: './rxjs-item-detail-with-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class RxjsItemDetailWithSignal {

  public items: Signal<ItemDto[] | undefined> ;
    public selectedItem$: Subject<number> = new Subject<number>();
    public itemDetails: Signal<ItemDetailDto | undefined> ;

  public selectedItemId: number | null = null;

  constructor(private dataService: DataService) {
    this.items = toSignal(dataService.getItems());
    this.itemDetails =  toSignal(this.selectedItem$.pipe(switchMap(id => this.dataService.getItemDetails(id))));
  }

  onSelect(itemId: number) {
    this.selectedItem$.next(itemId);
  }
}
