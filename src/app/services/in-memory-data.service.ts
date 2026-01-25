import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ItemDto } from '../dtos/item-dto';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const starreditems: StarredItemDto[] = [ { id: 1, starredBy: 'User1' } ];

    const items: ItemDto[] = [
      { id: 1, name: 'Item 1'},
      { id: 2, name: 'Item 2'},
      { id: 3, name: 'Item 3'}
    ];

    const itemdetails: ItemDetailDto[] = [
      { id: 1, name: 'Item 1', country: 'Country 1', detail: 'Detail for Item 1'},
      { id: 2, name: 'Item 2', country: 'Country 2', detail: 'Detail for Item 2'},
      { id: 3, name: 'Item 3', country: 'Country 3', detail: 'Detail for Item 3'}
    ];
    return { items, itemdetails, starreditems };
  }
}