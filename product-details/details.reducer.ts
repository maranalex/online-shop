import {IProduct} from '../models/clases';
import * as DetailsAction from '../product-details/details.actions';


export function productReducer(state: IProduct[] , action: DetailsAction.Actions) {
  switch (action.type) {
    case DetailsAction.GET_PRODUCT:
      return action.id;
    case DetailsAction.GET_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
