import {Component, OnInit, Output} from '@angular/core';
import {Input} from '@angular/core';
import {Product} from '../product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  prId: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.http.get<any>('http://localhost:3000/products/' + params.id).subscribe(product => this.product = product);
    });
  }

  private saveChanges() {
    console.log(this.product);
    this.http.put<Product>('http://localhost:3000/products/' + this.product.id, this.product).subscribe();
    window.alert('Changes saved');
  }

  ngOnInit() {
  }

}
