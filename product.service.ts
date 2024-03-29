import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {IProduct} from './models/clases';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  logOut() {
  }

  validateLogIn(username: string, password: string): Promise<HttpResponse<any>> {
     return this.http.post<any>('http://localhost:3000/login', {username, password}).toPromise();
  }

  toHomePage() {
    return this.router.navigateByUrl('http://localhost:4200/products');
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<any>('http://localhost:3000/products');
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<any>('http://localhost:3000/products/' + id);
  }

  putProduct(product: Product): Observable<any> {
    return this.http.put<IProduct>('http://localhost:3000/products/' + product.id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete('http://localhost:3000/products/' + id);
  }

  constructor(private http: HttpClient,
              private router: Router) {
  }
}
