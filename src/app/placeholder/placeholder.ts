import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placeholder',
  imports: [CommonModule],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent implements DoCheck {
  @Input() itemDetail: ItemDetailDto | null = null;

  ngDoCheck() {
    console.log('PlaceholderComponent DoCheck called. Current itemDetail:', this.itemDetail);
  }
}
