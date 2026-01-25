import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ItemDto } from '../dtos/item-dto';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { StarredItemDto } from '../dtos/starred-item-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'api/items';  // URL to in-memory web API
    private apiUrlDetails = 'api/itemdetails';  // URL to in-memory web API
    private apiUrlStarred = 'api/starreditems';  // URL to in-memory web API




  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError('getItems', []))
      );
  }

  getItem(id: number): Observable<ItemDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ItemDto>(url).pipe(
      catchError(this.handleError<ItemDto>(`getItem id=${id}`))
    );
  }

  addItem(item: ItemDto): Observable<ItemDto> {
    return this.http.post<ItemDto>(this.apiUrl, item).pipe(
      catchError(this.handleError<ItemDto>('addItem'))
    );
  }

  updateItem(item: ItemDto): Observable<ItemDto> {
    return this.http.put<ItemDto>(this.apiUrl, item).pipe(
      catchError(this.handleError<ItemDto>('updateItem'))
    );
  }

  deleteItem(id: number): Observable<ItemDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ItemDto>(url).pipe(
      catchError(this.handleError<ItemDto>('deleteItem'))
    );
  }

    getItemDetails(id: number): Observable<ItemDetailDto> {
    const url = `${this.apiUrlDetails}/${id}`;
    return this.http.get<ItemDetailDto>(url).pipe(
      catchError(this.handleError<ItemDetailDto>(`getItemDetail id=${id}`))
    );
  }

  getStarredItem(): Observable<StarredItemDto> {
    const url = `${this.apiUrlStarred}/1`;
    return this.http.get<StarredItemDto>(url).pipe(
      catchError(this.handleError<StarredItemDto>(`getstarreditem`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}