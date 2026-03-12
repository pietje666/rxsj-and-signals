import { ChangeDetectionStrategy, Component, effect, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExampleCode } from '../example-code/example-code';

@Component({
    selector: 'signal-person-form-bad-set',
    imports: [FormsModule, ExampleCode],
    templateUrl: './signal-person-form-bad-set.html',
    styleUrl: './signal-person-form-bad-set.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalPersonFormBadSet {
    public readonly firstName = model('');
    public readonly lastName = model('');
    public readonly age = model(0);
    public readonly people = signal<Array<{ firstName: string; lastName: string; age: number }>>([]);
    public loopCount: number = 0;

    private effectEnabled = false;

    constructor() {
        effect(() => {
                console.log('effect runs, loopCount:', this.loopCount);
                this.loopCount++;
                this.people.set([...this.people(), { firstName: 'Loop', lastName: `#${this.loopCount}`, age: this.loopCount }]);
                //this.people.update(items => [...items, { firstName: 'Loop', lastName: `#${this.loopCount}`, age: this.loopCount }]);
        });
    }

    addBad(): void {
        const firstName = this.firstName();
        const lastName = this.lastName();
        const age = this.age();

        this.people.set([...this.people(), { firstName, lastName, age }]);
        //this.people.update(items => [...items, { firstName, lastName, age }]);

    }

    enableEffect(): void {
        console.log('Effect enabled');
        this.effectEnabled = true;
    }
}
