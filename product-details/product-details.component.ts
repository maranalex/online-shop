import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Observable<Product>;
  prId: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private dialog: NgbModal) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.product = this.http.get<any>('http://localhost:3000/products/' + params.id);
      this.prId = params.id;
    });
  }

  ngOnInit() {
    this.product.subscribe();
  }

  private deleteProduct() {
    this.dialog.open(DeleteDialogComponent);

  //  this.http.delete('http://localhost:3000/products/' + this.prId).subscribe();

  }
}
