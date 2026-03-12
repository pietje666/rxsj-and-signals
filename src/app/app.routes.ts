import { Routes } from '@angular/router';
import { RxjsLoading } from './rxjsloading/rxjs-loading';
import { SignalRxjsLoading } from './signal-rxjs-loading/signal-rxjs-loading';
import { Home } from './home/home';
import { RxjsItemDetail } from './rxjs-item-detail/rxjs-item-detail';
import { SignalRxjsItemDetail } from './signal-rxjs-item-detail/signal-rxjs-item-detail';
import { RxjsItemDetailWithoutSelect } from './rxjs-item-detail-without-select/rxjs-item-detail-without-select';
import { SignalItemDetailWithoutSelect } from './signal-item-detail-without-select/signal-item-detail-without-select';
import { PromiseItemDetail } from './promise-item-detail/promise-item-detail';
import { PromiseItemDetailWithoutSelect } from './promise-item-detail-without-select/promise-item-detail-without-select';
import { PromiseAndSignalItemDetailWithoutSelect } from './promise-and-signal-item-detail-without-select/promise-and-signal-item-detail-without-select';
import { SignalHttpResourceItemDetail } from './signal-httpresource-item-detail/signal-httpresource-item-detail';
import { SignalHttpResourceItemDetailWithTwoSelects } from './signal-httpresource-item-detail-with-two-selects/signal-httpresource-item-detail-with-two-selects';
import { RxjsSetVariablesInTap } from './bad-practices/rxjs-set-variables-in-tap/rxjs-set-variables-in-tap';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rxjs-loading', component: RxjsLoading },
  { path: 'signal-rxjs-loading', component: SignalRxjsLoading },
  { path: 'rxjs-item-detail', component: RxjsItemDetail},
  { path: 'signal-rxjs-item-detail', component: SignalRxjsItemDetail},
  { path: 'rxjs-item-detail-without-select', component: RxjsItemDetailWithoutSelect},
  { path: 'signal-item-detail-without-select', component: SignalItemDetailWithoutSelect},
  { path: 'promise-item-detail', component: PromiseItemDetail},
  { path: 'promise-item-detail-without-select', component: PromiseItemDetailWithoutSelect},
  { path: 'promise-and-signal-item-detail-without-select', component: PromiseAndSignalItemDetailWithoutSelect},
  { path: 'signal-httpresource-item-detail', component: SignalHttpResourceItemDetail},
  { path: 'signal-httpresource-item-detail-with-two-selects', component: SignalHttpResourceItemDetailWithTwoSelects},
  { path: 'bad-practices/rxjs-set-variables-in-tap', component: RxjsSetVariablesInTap}
];
