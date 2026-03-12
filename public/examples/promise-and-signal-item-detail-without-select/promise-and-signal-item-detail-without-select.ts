// @ts-nocheck
// Display-only source code.
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { firstValueFrom} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';
import { ExampleCode } from '../example-code/example-code';


@Component({
  selector: 'promise-and-signal-item-detail-without-select',
  imports: [ FormsModule, ExampleCode],
  templateUrl: './promise-and-signal-item-detail-without-select.html',
  styleUrl: './promise-and-signal-item-detail-without-select.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class PromiseAndSignalItemDetailWithoutSelect implements OnInit {

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
