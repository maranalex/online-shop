import {Action} from '@ngrx/store';
import {IProduct} from '../models/clases';
import {GetProducts, GetProductsSuccess} from '../../store/actions/product.actions';


export const GET_PRODUCT = '[PRODUCT] Get product by id';
export const GET_PRODUCT_SUCCESS = '[PRODUCT] Get product by id success';


export class GetProduct implements Action {
  readonly type = GET_PRODUCT;

  constructor(public id: number) {
  }
}

export class GetProductSuccess implements Action {
  readonly type = GET_PRODUCT_SUCCESS;

  constructor(public payload: IProduct) {
  }
}

export type Actions
  = GetProduct
  | GetProductSuccess;
