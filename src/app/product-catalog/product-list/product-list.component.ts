import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductCatalogService } from '../product-catalog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
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
      const resp:any = await this.dataService.getProducts().toPromise();
      console.log(resp);
      this.products = resp.products;
      console.log(this.products);
      return resp;
    } catch (error) {
      console.error('Error fetching products', error);
      throw error;
    }
  }
}