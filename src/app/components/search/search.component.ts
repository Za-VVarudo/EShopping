import { Component, EventEmitter, Predicate, Output } from '@angular/core';
import { FilterItem } from 'src/app/common/data/models/FilterItem';
import { Product } from 'src/app/common/data/models/Product';
import { ProductFilterData } from 'src/app/common/data/models/ProductFilterData';
import { ProductFilterStatusEnum } from 'src/app/common/enums/ProductFilterStatusEnum';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchEventEmit: EventEmitter<ProductFilterData> = new EventEmitter<ProductFilterData>();

  searchValue: string = '';

  predicate : Predicate<Product> | undefined;

  selectedStatus : ProductFilterStatusEnum | undefined = undefined;

  filterStatuses : FilterItem<ProductFilterStatusEnum, string>[] = [
    {
      id: ProductFilterStatusEnum.Available,
      name: "Có sẵn"
    },
    {
      id: ProductFilterStatusEnum.Unavailable,
      name: "Ngừng kinh doanh"
    }
  ]

  /*onSearchValueChange(event : Event) : void {

    var searchInput : HTMLInputElement = <HTMLInputElement>event.target;

    this.searchValue = searchInput.value;

    this.emitSearchEvent();
  }*/

  onSearchValueChange() : void {

    this.emitSearchEvent();
  }

  onFilterValueChange(): void {
    this.emitSearchEvent();
  }

  onSearchButtonClicked() : void {
    this.emitSearchEvent();
  }

  emitSearchEvent() {
    this.searchEventEmit.emit({ selectedStatus: this.selectedStatus, searchValue: this.searchValue});
  }
}


