import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { catchError, combineLatest, defer, map, of, startWith, Subject, tap } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ExampleCode } from '../../example-code/example-code';

@Component({
  selector: 'rxjs-set-variables-in-tap',
  imports: [AsyncPipe, ExampleCode],
  templateUrl: './rxjs-set-variables-in-tap.html',
  styleUrl: './rxjs-set-variables-in-tap.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsSetVariablesInTap {
  private readonly dataService = inject(DataService);
  private readonly query$ = new Subject<string>();

  public itemsCount = 0;
  public isLoading = false;
  public loadError = '';

  public readonly items$ = defer(() => {
    this.isLoading = true;
    this.loadError = '';

    return this.dataService.getItems().pipe(
      tap(items => {
        this.itemsCount = items.length;
        this.isLoading = false;
      })
    );
  });

  public readonly filteredItems$ = combineLatest([
    this.items$,
    this.query$.pipe(startWith(''))
  ]).pipe(
    map(([items, query]) =>
      items.filter(item => item.name.toLowerCase().includes(query.trim().toLowerCase()))
    )
  );

  onQueryChange(query: string): void {
    this.query$.next(query);
  }
}
