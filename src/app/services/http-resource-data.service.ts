import { Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ItemDto } from '../dtos/item-dto';
import { ItemDetailDto } from '../dtos/item-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class HttpResourceDataService {
    private apiUrl = 'api/items';  // URL to in-memory web API
    private apiUrlDetails = 'api/itemdetails';  // URL to in-memory web API
    private apiUrlStarred = 'api/starreditems';  // URL to in-memory web API




  constructor() { }

  itemsResource = httpResource<ItemDto[]>(() => this.apiUrl);

  selectedItemId = signal<number | null>(null);

  itemDetailsResource = httpResource<ItemDetailDto>(() => {
    const id = this.selectedItemId();
    return id ? `${this.apiUrlDetails}/${id}` : undefined;
    // Returning undefined prevents the request if no ID is set
  });
}