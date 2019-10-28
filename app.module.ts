import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {StoreModule} from '@ngrx/store';
import {productReducer} from '../store/reducers/product.reducer';
import {ProductEffects} from '../store/effects/product.effects';
import {EffectsModule} from '@ngrx/effects';
import {detailsReducer} from '../store/reducers/details.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    DeleteDialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    StoreModule.forRoot({
      productList: productReducer,
      productDetail: detailsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([ProductEffects])
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
