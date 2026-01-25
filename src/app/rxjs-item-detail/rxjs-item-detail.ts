import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { ItemDto } from '../dtos/item-dto';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemDetailDto } from '../dtos/item-detail-dto';


@Component({
  selector: 'app-rxjs-item-detail',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './rxjs-item-detail.html',
  styleUrl: './rxjs-item-detail.css',
})
export class RxjsItemDetail {

  public items$: Observable<ItemDto[]> ;
    public selectedItem$: Subject<number> = new Subject<number>();
    public itemDetails$: Observable<ItemDetailDto> ;

  public selectedItemId: number | null = null;

  constructor(private dataService: DataService) {
    this.items$ = dataService.getItems();
    this.itemDetails$ = this.selectedItem$.pipe(switchMap(id => this.dataService.getItemDetails(id)));
  }

  onSelect(itemId: number) {
    this.selectedItem$.next(itemId);
  }
}
