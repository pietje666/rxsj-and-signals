import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { map, Observable, startWith } from 'rxjs';
import { ItemDto } from '../dtos/item-dto';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-rxjsloading',
  imports: [ AsyncPipe ],
  templateUrl: './rxjs-loading.html',
  styleUrl: './rxjs-loading.css',
})
export class RxjsLoading {

  public itemDtosWrappedWithLoadState$! : Observable<{ loaded: boolean; items: ItemDto[] }>;

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.itemDtosWrappedWithLoadState$ = this.dataService.getItems().pipe(map((items) =>({ loaded: true, items })), startWith({ loaded: false, items: [] }));
  }

}
