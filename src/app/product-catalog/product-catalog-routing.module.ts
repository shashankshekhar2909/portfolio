import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'',
    component:SearchComponent,
    title:'Search'
  },
  {
    path:'list',
    component:ProductListComponent,
    title:'Product List'
  },
  {
    path:'details/:id',
    component:ProductDetailComponent,
    title:'Product Details'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCatalogRoutingModule { }
