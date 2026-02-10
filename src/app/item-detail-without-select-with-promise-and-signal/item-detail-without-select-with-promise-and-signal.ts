import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { firstValueFrom} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';


@Component({
  selector: 'app-item-detail-without-select-with-promise-and-signal',
  imports: [ FormsModule],
  templateUrl: './item-detail-without-select-with-promise-and-signal.html',
  styleUrl: './item-detail-without-select-with-promise-and-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ItemDetailWithoutSelectWithPromiseAndSignal implements OnInit {

  public itemDetails = signal<ItemDetailDto | null>(null);
  public starredItem = signal<StarredItemDto | null>(null);

  constructor(private dataService: DataService) {


  }

  async ngOnInit(): Promise<void> {
      const starred = await firstValueFrom(this.dataService.getStarredItem());
      this.starredItem.set(starred);
      
      const details = await firstValueFrom(this.dataService.getItemDetails(starred.id));
      this.itemDetails.set(details);
  }
}
