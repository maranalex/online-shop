import {Component, OnInit} from '@angular/core';
import {IProduct} from '../models/clases';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import * as productActions from '../../store/actions/product.actions';
import {IState} from '../../store/reducers/product.reducer';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products$: Observable<IProduct[]> = null;

  constructor(private store: Store<IState>) {
  }

  ngOnInit() {
    this.store.dispatch(new productActions.GetProducts());
    this.products$ = this.store.select(state => state.productList);

  }
}
