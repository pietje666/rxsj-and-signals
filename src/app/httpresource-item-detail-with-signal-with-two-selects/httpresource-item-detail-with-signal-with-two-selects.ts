import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { ItemDto } from '../dtos/item-dto';
import { HttpResourceDataService } from '../services/http-resource-data.service';

@Component({
  selector: 'app-httpresource-item-detail-with-signal-with-two-selects',
  imports: [FormsModule],
  templateUrl: './httpresource-item-detail-with-signal-with-two-selects.html',
  styleUrl: './httpresource-item-detail-with-signal-with-two-selects.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpResourceItemDetailWithSignalWithTwoSelects {
  private httpResourceDataService = inject(HttpResourceDataService);

  public items: Signal<ItemDto[] | undefined> = this.httpResourceDataService.itemsResource.value;
  public selectedItem$: Subject<number> = new Subject<number>();
  public itemDetails: Signal<ItemDetailDto | undefined> = this.httpResourceDataService.itemDetailsResourceTwoInputs.value;

  public selectedItemId: number | null = null;
  public selectedItemIdSecondary: number | null = null;

  onSelect(itemId: number) {
    this.httpResourceDataService.selectedItemId.set(itemId);
  }

  otherSelect(itemId: number) {
    this.httpResourceDataService.secondarySelectedItemId.set(itemId);
  }
}
