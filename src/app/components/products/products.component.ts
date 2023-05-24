import { Component, Input } from '@angular/core';
import { Product } from 'src/app/common/data/models/Product';
import { ProductFilterData } from 'src/app/common/data/models/ProductFilterData';
import { ProductFilterStatusEnum } from 'src/app/common/enums/ProductFilterStatusEnum';
import { Predicate } from 'src/app/common/types/Predicate';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  predicate: Predicate<Product> | undefined;

  products : Product[] = [
    { name: "Tivi", price: 100, color:"Blue", isAvailable: true, imageUrl: "https://cdn.tgdd.vn/Files/2020/08/12/1279255/xiaomi-ra-mat-tivi-oled-man-hinh-trong-suot-gia-k-6.jpg"},
    { name: "Tủ lạnh", price: 200, color:"Red", isAvailable: true, imageUrl: "https://vcdn-sohoa.vnecdn.net/2021/09/28/21a6d08fw4cza-1665-1632801967.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NmcL5xtCeNXeuArWKSbC7g"},
    { name: "Máy giặt", price: 220, color:"White", isAvailable: false, imageUrl: "https://hangdienmaygiare.com/images/products/2023/03/03/large/may-giat-electrolux-ewf1024m3sb-10-kg-inverter_1677819674.jpg" },
    { name: "Máy lạnh", price: 300, color:"Black", isAvailable: true, imageUrl: "https://photo2.tinhte.vn/data/attachment-files/2021/05/5464120_5451930_Daikin_FTKZ-01.jpg" },
    { name: "Đầu đĩa DVD", price: 49, color:"Yellow", isAvailable: false, imageUrl: "https://kingshop.vn/data/images/EVD-3801-1.jpg" }
  ];

  filteredProducts : Product[] = this.getProducts();

  getProducts() : Product[] {
    return this.filterProducts(this.products);
  }

  filterProducts(products: Product[]) : Product[] {
    if (this.predicate != undefined) return products.filter(this.predicate);

    return products;
  }

  onReceiveEmittedSearchEvent(data: ProductFilterData) {

    var isSearchInputChange = false;

    var searchTextPredicate = (p: Product) : boolean => true;

    var filterStatusPredicate = (p: Product) : boolean => true;

    if (data.searchValue.length > 0)
    {
      var normalizeSearchInput = data.searchValue.toUpperCase();

      searchTextPredicate = (p) => p.name.toUpperCase().includes(normalizeSearchInput);

      isSearchInputChange = true;
    }

    if (data.selectedStatus != undefined) {
      filterStatusPredicate = (p) => {
        switch(data.selectedStatus) {
          case ProductFilterStatusEnum.Available:
            return p.isAvailable;

          case ProductFilterStatusEnum.Unavailable:
            return !p.isAvailable;
        }

        return true;
      }

      isSearchInputChange = true;
    }

    if (!isSearchInputChange) 
    {
      this.predicate = undefined;
    } 
    else 
    {
      this.predicate = (p) => searchTextPredicate(p) && filterStatusPredicate(p);
    }

    this.filteredProducts = this.getProducts();
  }
}

