import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  // onSubmit(username: string, password: string) {
  //   store.dispatch(login({username: username, password: password}));
  // }

  login() {
    this.productService.validateLogIn(this.username, this.password)
      .then(() => this.productService.toHomePage())
      .catch(() => window.alert('username or password is incorrect'));
  }
}


