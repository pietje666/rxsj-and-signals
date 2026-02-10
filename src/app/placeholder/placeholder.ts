import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItemDetailDto } from '../dtos/item-detail-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placeholder',
  imports: [CommonModule],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent {
  @Input() itemDetail: ItemDetailDto | null = null;
}
