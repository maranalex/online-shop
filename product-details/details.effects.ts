import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {ProductService} from '../../app/product.service';
import {map, switchMap} from 'rxjs/operators';
import {GET_PRODUCT} from './details.actions';

@Injectable()
export class DetailsEffects {
  @Effect()
  loadProduct$ = createEffect(() => this.actions$.pipe(
    ofType(GET_PRODUCT),
    switchMap(() => this.productService.getProducts()), map((products) => new GetProductsSuccess(products))));

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {
  }
}
