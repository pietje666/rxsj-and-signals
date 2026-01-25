import { Routes } from '@angular/router';
import { RxjsLoading } from './rxjsloading/rxjs-loading';
import { RxjsLoadingWithSignal } from './rxjs-loading-with-signal/rxjs-loading-with-signal';
import { Home } from './home/home';
import { RxjsItemDetail } from './rxjs-item-detail/rxjs-item-detail';
import { RxjsItemDetailWithSignal } from './rxjs-item-detail-with-signal/rxjs-item-detail-with-signal';
import { RxjsItemDetailWithoutSelect } from './rxjs-item-detail-without-select/rxjs-item-detail-without-select';
import { RxjsItemDetailWithoutSelectWithSignal } from './rxjs-item-detail-without-select-with-signal/rxjs-item-detail-without-select-with-signal';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rxjs-loading', component: RxjsLoading },
  { path: 'rxjs-loading-with-signal', component: RxjsLoadingWithSignal },
  { path: 'rxjs-item-detail', component: RxjsItemDetail},
  { path: 'rxjs-item-detail-with-signal', component: RxjsItemDetailWithSignal},
  { path: 'rxjs-item-detail-without-select', component: RxjsItemDetailWithoutSelect},
  { path: 'rxjs-item-detail-without-select-with-signal', component: RxjsItemDetailWithoutSelectWithSignal}
];
