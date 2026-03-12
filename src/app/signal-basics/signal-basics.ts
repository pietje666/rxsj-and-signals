import { ChangeDetectionStrategy, Component, effect, linkedSignal, signal, computed } from '@angular/core';
import { ExampleCode } from '../example-code/example-code';

@Component({
  selector: 'signal-basics',
  imports: [ExampleCode],
  templateUrl: './signal-basics.html',
  styleUrl: './signal-basics.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalBasics {
  public readonly count = signal(0);
  public readonly step = signal(1);

  public readonly doubled = computed(() => this.count() * 2);
  public readonly totalWithStep = computed(() => this.count() + this.step());

  public readonly linkedTotal = linkedSignal(() => this.count() + this.step());

  public readonly logMessages = signal<string[]>([]);

  constructor() {
    effect(() => {
      const message = `effect: count=${this.count()}, step=${this.step()}`;
      this.logMessages.update(messages => [message, ...messages].slice(0, 5));
    });
  }

  increment(): void {
    this.count.update(value => value + this.step());
  }

  decrement(): void {
    this.count.update(value => value - this.step());
  }

  setCount(value: number): void {
    this.count.set(value);
  }

  setStep(value: number): void {
    this.step.set(value);
  }

  setLinkedTotal(value: number): void {
    this.linkedTotal.set(value);
  }
}
