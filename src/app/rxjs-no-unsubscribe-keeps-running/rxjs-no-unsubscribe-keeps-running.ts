import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, interval, takeUntil, tap } from 'rxjs';
import { ExampleCode } from '../example-code/example-code';

@Component({
  selector: 'rxjs-no-unsubscribe-keeps-running',
  imports: [ExampleCode],
  templateUrl: './rxjs-no-unsubscribe-keeps-running.html',
  styleUrl: './rxjs-no-unsubscribe-keeps-running.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsNoUnsubscribeKeepsRunning implements OnDestroy {
  public ticks: number[] = [];
  public status = 'Running… no unsubscribe on destroy.';

  // private readonly destroy$ = new Subject<void>();

  constructor() {
    interval(1000)
      .pipe(
        tap(() => console.log('interval is afgegaan', this.ticks)),
        // takeUntil(this.destroy$)
      )
      .subscribe(count => {
        this.ticks.push(count);
        this.blockMainThread(500);
      });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
    this.status = 'Destroyed, subscription completed.';
  }

  private blockMainThread(durationMs: number): void {
    const start = performance.now();
    while (performance.now() - start < durationMs) {
      // Busy loop to simulate a heavy synchronous task.
    }
  }
}
