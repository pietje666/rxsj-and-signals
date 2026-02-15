import { Routes } from '@angular/router';
import { RxjsLoading } from './rxjsloading/rxjs-loading';
import { RxjsLoadingWithSignal } from './rxjs-loading-with-signal/rxjs-loading-with-signal';
import { Home } from './home/home';
import { RxjsItemDetail } from './rxjs-item-detail/rxjs-item-detail';
import { RxjsItemDetailWithSignal } from './rxjs-item-detail-with-signal/rxjs-item-detail-with-signal';
import { RxjsItemDetailWithoutSelect } from './rxjs-item-detail-without-select/rxjs-item-detail-without-select';
import { ItemDetailWithoutSelectWithSignal } from './item-detail-without-select-with-signal/item-detail-without-select-with-signal';
import { ItemDetailWithPromise } from './item-detail-with-promise/item-detail-with-promise';
import { ItemDetailWithoutSelectWithPromise } from './item-detail-without-select-with-promise/item-detail-without-select-with-promise';
import { ItemDetailWithoutSelectWithPromiseAndSignal } from './item-detail-without-select-with-promise-and-signal/item-detail-without-select-with-promise-and-signal';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rxjs-loading', component: RxjsLoading },
  { path: 'rxjs-loading-with-signal', component: RxjsLoadingWithSignal },
  { path: 'rxjs-item-detail', component: RxjsItemDetail},
  { path: 'rxjs-item-detail-with-signal', component: RxjsItemDetailWithSignal},
  { path: 'rxjs-item-detail-without-select', component: RxjsItemDetailWithoutSelect},
  { path: 'item-detail-without-select-with-signal', component: ItemDetailWithoutSelectWithSignal},
  { path: 'item-detail-with-promise', component: ItemDetailWithPromise},
  { path: 'item-detail-without-select-with-promise', component: ItemDetailWithoutSelectWithPromise},
  { path: 'item-detail-without-select-with-promise-and-signal', component: ItemDetailWithoutSelectWithPromiseAndSignal}
];
