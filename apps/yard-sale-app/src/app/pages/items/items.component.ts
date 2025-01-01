import { Component } from '@angular/core';
import { ItemListComponent } from '@world-travel/item-list';

@Component({
  selector: 'app-items',
  imports: [ItemListComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {}
