import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { firstValueFrom} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';


@Component({
  selector: 'promise-item-detail-without-select',
  imports: [ FormsModule],
  templateUrl: './promise-item-detail-without-select.html',
  styleUrl: './promise-item-detail-without-select.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class PromiseItemDetailWithoutSelect  implements OnInit {

  public itemDetails: ItemDetailDto | null = null;
  public starredItem: StarredItemDto | null = null;

  constructor(private dataService: DataService) {


  }

  async ngOnInit(): Promise<void> {
      this.starredItem = await firstValueFrom(this.dataService.getStarredItem());
      this.itemDetails = await firstValueFrom(this.dataService.getItemDetails(this.starredItem.id));
  }
}
