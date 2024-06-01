import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCatalogService } from '../product-catalog.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private dataService: ProductCatalogService
  ){}
  id:number = 0;
  productDetails :any = null;
  images:any = null;
  mainImage:any = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.id = +params.get('id'); // The '+' operator is used to convert the string to a number
    });
    console.log(this.id);
    if(this.id){
      this.getDetails(this.id);
    }
  }

  async getDetails(id:any){
    try {
      const resp:any = await this.dataService.getProductsDetails(id).toPromise();
      console.log(resp);
      this.productDetails = resp;
      this.images = this.productDetails.images;
      this.mainImage = this.images[0];
      // console.log(this.productDetails);
      return resp;
    } catch (error) {
      console.error('Error fetching products', error);
      throw error;
    }
  }

  changeMainImage(item:any){
    console.log(item);
    this.mainImage = item;
  }
}
