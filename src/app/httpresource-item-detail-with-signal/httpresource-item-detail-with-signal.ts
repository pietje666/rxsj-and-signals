import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { ItemDto } from '../dtos/item-dto';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { HttpResourceDataService } from '../services/http-resource-data.service';

@Component({
  selector: 'app-httpresource-item-detail-with-signal',
  imports: [FormsModule],
  templateUrl: './httpresource-item-detail-with-signal.html',
  styleUrl: './httpresource-item-detail-with-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class HttpResourceItemDetailWithSignal {

  public items: Signal<ItemDto[] | undefined> ;
    public selectedItem$: Subject<number> = new Subject<number>();
    public itemDetails: Signal<ItemDetailDto | undefined> ;

  public selectedItemId: number | null = null;

  constructor(private httpResourceDataService: HttpResourceDataService) {
    this.items = httpResourceDataService.itemsResource.value;
    this.itemDetails = httpResourceDataService.itemDetailsResource.value;
  }

  onSelect(itemId: number) {
    this.httpResourceDataService.selectedItemId.set(itemId);
  }
}
