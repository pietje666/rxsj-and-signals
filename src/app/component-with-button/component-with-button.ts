import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'component-with-button',
  templateUrl: './component-with-button.html',
  styleUrl: './component-with-button.css',

  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class ComponentWithButton {

    click() {
        console.log('Button clicked!');
    }
}
