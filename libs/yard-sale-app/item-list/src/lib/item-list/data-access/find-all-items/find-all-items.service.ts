import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { FindAllItemsDto } from './dtos';

@Injectable({
  providedIn: 'root',
})
export class FindAllItemsService {
  static readonly ITEMS: readonly FindAllItemsDto[] = [
    {
      id: 1,
      name: 'Item 1',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      imageUrl: 'https://picsum.photos/300/200',
    },
  ];

  readonly #itemsResource = rxResource({
    loader: () => of(FindAllItemsService.ITEMS),
  });

  readonly $items = this.#itemsResource.value.asReadonly();
  readonly $isLoading = this.#itemsResource.isLoading;
  readonly $error = this.#itemsResource.error;
}
