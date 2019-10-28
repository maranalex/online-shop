import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../product.service';
import {Store} from '@ngrx/store';
import {IProduct} from '../models/clases';
import {GetProduct} from '../../store/actions/details.actions';
import {Observable} from 'rxjs';
import {IState} from '../../store/reducers/details.reducer';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<IProduct>;


  constructor(private route: ActivatedRoute,
              private dialog: NgbModal,
              private productService: ProductService,
              private store: Store<IState>) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.store.dispatch(new GetProduct(params.id)));
    this.product$ = this.store.select(state => state.productDetail);

    // this.route.params.subscribe(params =>
    //   this.store.select(state => state.productList).subscribe(arr => this.product = arr.find(elm => elm.id === Number(params.id))));
  }


  private openDialog() {
    const ref = this.dialog.open(DeleteDialogComponent);
    // ref.componentInstance.deleteRequest.subscribe(() => this.productService.deleteProduct(this.product.id).subscribe(() =>
    // this.productService.toHomePage()));
  }
}
