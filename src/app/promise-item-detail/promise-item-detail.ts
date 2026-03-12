import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { firstValueFrom, Observable } from 'rxjs';
import { ItemDto } from '../dtos/item-dto';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { PlaceholderComponent } from "../placeholder/placeholder";
import { ComponentWithButton } from "../component-with-button/component-with-button";


@Component({
  selector: 'promise-item-detail',
  imports: [FormsModule, PlaceholderComponent, ComponentWithButton],
  templateUrl: './promise-item-detail.html',
  styleUrl: './promise-item-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class PromiseItemDetail implements OnInit {

  public items$: Observable<ItemDto[]> ;
  public itemDetails: ItemDetailDto | null = null;

  public selectedItemId: number | null = null;

  constructor(private dataService: DataService) {
    this.items$ = dataService.getItems();
  }
    async ngOnInit(): Promise<void> {
          this.itemDetails = await firstValueFrom(this.dataService.getItemDetails(2));

    }

  async onSelect(itemId: number) {
    //  this.itemDetails = this.getRandomItemDetail();

    console.log('ItemDetails in de console😊 ', this.itemDetails);
  }

  getRandomItemDetail(): ItemDetailDto {
    const items: ItemDetailDto[] = [
      {id: 1, name: 'hardgecodeerd 1 🦒', country: 'Country 1', detail: 'heel gedetailleerd 1🦒🦒'},
      {id: 2, name: 'hardgecodeerd 2 🦓', country: 'Country 2', detail: 'heel gedetailleerd 2🦓🦓'},
      {id: 3, name: 'hardgecodeerd 3 🐘', country: 'Country 3', detail: 'heel gedetailleerd 3🐘🐘'},
      {id: 4, name: 'hardgecodeerd 4 🦏', country: 'Country 4', detail: 'heel gedetailleerd 4🦏🦏'},
      {id: 5, name: 'hardgecodeerd 5 🐒', country: 'Country 5', detail: 'heel gedetailleerd 5🐒🐒'},
      {id: 6, name: 'hardgecodeerd 6 🐆', country: 'Country 6', detail: 'heel gedetailleerd 6🐆🐆'},
      {id: 7, name: 'hardgecodeerd 7 🐧', country: 'Country 7', detail: 'heel gedetailleerd 7🐧🐧'},
      {id: 8, name: 'hardgecodeerd 8 🐑', country: 'Country 8', detail: 'heel gedetailleerd 8🐑🐑'},
      {id: 9, name: 'hardgecodeerd 9 🪼', country: 'Country 9', detail: 'heel gedetailleerd 9🪼🪼'},
      {id: 10, name: 'hardgecodeerd 10 🐅', country: 'Country 10', detail: 'heel gedetailleerd 10🐅🐅'}
    ];
    
    let availableItems = items;
    if (this.itemDetails) {
      availableItems = items.filter(item => item.id !== this.itemDetails!.id);
    }
    
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    return availableItems[randomIndex];
  }  
}
