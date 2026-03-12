import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExampleCode } from '../example-code/example-code';

@Component({
  selector: 'signal-array-update',
  imports: [ExampleCode, FormsModule],
  templateUrl: './signal-array-update.html',
  styleUrl: './signal-array-update.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalArrayUpdate {
  public readonly items = signal<string[]>(['Alpha', 'Bravo']);
  public readonly countOfItems = computed(() => this.items().length);

  public readonly newItem = model('');
  public readonly message = signal('');

  addBad(): void {
    const value = this.newItem();

    this.items().push(value);
    this.message.set('Bad add: array mutated, signal not updated.');
  }

  addGood(): void {
    const value = this.newItem();

    this.items.update(items => [...items, value]);
    this.message.set('Good add: signal updated via update().');
  }
}
