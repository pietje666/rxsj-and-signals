import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  public itemDetails: Signal<ItemDetailDto | undefined> = this.httpResourceDataService.itemDetailsResourceTwoInputs.value;

  public selectedItemId: number | null = null;
  public selectedItemIdSecondary: number | null = null;

  public onSelect(itemId: number) : void {
    this.httpResourceDataService.selectedItemId.set(itemId);
  }

  public otherSelect(itemId: number) : void {
    this.httpResourceDataService.secondarySelectedItemId.set(itemId);
  }
}
