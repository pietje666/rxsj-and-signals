import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExampleCode } from '../example-code/example-code';

@Component({
	selector: 'signal-person-form',
	imports: [FormsModule, ExampleCode],
	templateUrl: './signal-person-form.html',
	styleUrl: './signal-person-form.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalPersonForm {
	public readonly firstName = model('');
	public readonly lastName = model('');
	public readonly age = model(0);
	public readonly people = signal<Array<{ firstName: string; lastName: string; age: number }>>([]);

	addPerson(): void {
		const firstName = this.firstName().trim();
		const lastName = this.lastName().trim();
		const age = this.age();

		if (!firstName || !lastName) {
			return;
		}

		this.people.update(items => [...items, { firstName, lastName, age }]);
        //dit niet doen
        //this.people.set([...this.people(), { firstName, lastName, age }]);

		this.firstName.set('');
		this.lastName.set('');
		this.age.set(0);
	}
}
