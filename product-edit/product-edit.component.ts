import {Component, OnInit, Output} from '@angular/core';
import {Input} from '@angular/core';
import {Product} from '../product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  prId: number;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private toHP: Router,
              private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.productService.getProduct(params.id).subscribe(data => this.product = data);
    });
  }

  private saveChanges() {
    this.productService.putProduct(this.product).subscribe(() => this.productService.toHomePage());
  }

  private cancelAction() {
    this.productService.toHomePage();
  }

  private isValid(): boolean {
    if (this.product.name.length === 0) {
      return true;
    }
    return false;
      }

  ngOnInit() {
  }

}
