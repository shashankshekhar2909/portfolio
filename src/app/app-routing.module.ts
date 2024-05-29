import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  {
    path:'',
    component:HeroComponent
  },
  {
    path: 'catalog', loadChildren: () => import('./product-catalog/product-catalog.module').then(m => m.ProductCatalogModule)
  },
  // { path: '**', redirectTo: '/products' } // Optional: wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
