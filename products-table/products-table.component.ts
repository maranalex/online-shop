import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {IProduct} from '../models/clases';
import {ProductService} from '../product.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {GetProducts} from '../../store/actions/product.actions';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products: Observable<IProduct[]>;

  constructor(private store: Store<AppState>,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.products = this.store.select(state => state.product);
  }
}
