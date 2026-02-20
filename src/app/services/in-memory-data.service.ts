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
      { id: 3, name: 'Item 3'},
      { id: 4, name: 'Item 4'},
      { id: 5, name: 'Item 5'},
      { id: 6, name: 'Item 6'},
      { id: 7, name: 'Item 7'}, 
      { id: 8, name: 'Item 8'},
      { id: 9, name: 'Item 9'},
    ];

    const itemdetails: ItemDetailDto[] = [
      { id: 1, name: 'Item 1', country: 'Country 1', detail: 'Detail for Item 1'},
      { id: 2, name: 'Item 2', country: 'Country 2', detail: 'Detail for Item 2'},
      { id: 3, name: 'Item 3', country: 'Country 3', detail: 'Detail for Item 3'},
      { id: 4, name: 'Item 4', country: 'Country 4', detail: 'Detail for Item 4'},
      { id: 5, name: 'Item 5', country: 'Country 5', detail: 'Detail for Item 5'},
      { id: 6, name: 'Item 6', country: 'Country 6', detail: 'Detail for Item 6'},
      { id: 7, name: 'Item 7', country: 'Country 7', detail: 'Detail for Item 7'},
      { id: 8, name: 'Item 8', country: 'Country 8', detail: 'Detail for Item 8'},
      { id: 9, name: 'Item 9', country: 'Country 9', detail: 'Detail for Item 9'},
      { id: 10, name: 'Item 10', country: 'Country 10', detail: 'Detail for Item 10'},
      { id: 11, name: 'Item 11', country: 'Country 11', detail: 'Detail for Item 11'},
      { id: 12, name: 'Item 12', country: 'Country 12', detail: 'Detail for Item 12'},
      { id: 13, name: 'Item 13', country: 'Country 13', detail: 'Detail for Item 13'},
      { id: 14, name: 'Item 14', country: 'Country 14', detail: 'Detail for Item 14'},
      { id: 15, name: 'Item 15', country: 'Country 15', detail: 'Detail for Item 15'},
    ];
    return { items, itemdetails, starreditems };
  }
}