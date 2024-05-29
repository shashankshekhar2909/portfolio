import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ProductCatalogService } from '../product-catalog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  myControl = new FormControl();
  products:any = [];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!:any;
  constructor(private dataService: ProductCatalogService){}
  ngOnInit() {
    this.getAllData();
  }

  async getAllData(){
    try {
      const products = await this.dataService.getProducts().toPromise();
      console.log(products);
      this.products.products;
      return products;
    } catch (error) {
      console.error('Error fetching products', error);
      throw error;
    }
  }

  onInput() {
    // This will trigger the filtering process
  }

  selectOption(option: string) {
    this.myControl.setValue(option);
    // Additional logic for when an option is selected can be added here
  }
}
