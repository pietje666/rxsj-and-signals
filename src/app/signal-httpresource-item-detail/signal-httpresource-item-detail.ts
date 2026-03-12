import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { ItemDto } from '../dtos/item-dto';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { HttpResourceDataService } from '../services/http-resource-data.service';

@Component({
  selector: 'signal-httpresource-item-detail',
  imports: [FormsModule],
  templateUrl: './signal-httpresource-item-detail.html',
  styleUrl: './signal-httpresource-item-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class SignalHttpResourceItemDetail {

    public items: Signal<ItemDto[] | undefined> ;
    public selectedItem$: Subject<number> = new Subject<number>();
    public itemDetails: Signal<ItemDetailDto | undefined> ;
    public userId: string | null = null;

  public selectedItemId: number | null = null;

  constructor(private httpResourceDataService: HttpResourceDataService) {
    this.items = httpResourceDataService.itemsResource.value;
    this.itemDetails = httpResourceDataService.itemDetailsResource.value;
  }

  onSelect(itemId: number) {
    this.httpResourceDataService.selectedItemId.set(itemId);
  }
}
