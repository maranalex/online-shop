import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  products: Product[];

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/products').subscribe(data => {
      this.products = data;
    });
  }
}
