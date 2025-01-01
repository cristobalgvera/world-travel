import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FindAllItemsService } from './data-access';

@Component({
  selector: 'lib-item-list',
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  readonly #findAllItemsService = inject(FindAllItemsService);

  readonly $items = this.#findAllItemsService.$items;
}
