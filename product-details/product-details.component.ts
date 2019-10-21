import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;


  constructor(private route: ActivatedRoute,
              private dialog: NgbModal,
              private productService: ProductService) {
    this.route.params.subscribe(params => {
      productService.getProduct(params.id).subscribe(data => this.product = data);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => params);
  }

  private openDialog() {
    const ref = this.dialog.open(DeleteDialogComponent);
    ref.componentInstance.deleteRequest.subscribe(() => this.productService.deleteProduct(this.product.id).subscribe(() =>
      this.productService.toHomePage()));
  }
}
