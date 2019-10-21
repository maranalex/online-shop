import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {LoginComponent} from './login/login.component';



const routes: Routes = [
  { path: 'products', component: ProductsTableComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: '**', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
