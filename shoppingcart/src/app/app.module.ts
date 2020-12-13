import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { FiltersComponent } from './components/cart/filters/filters.component';
import { ProductlistComponent } from './components/cart/productlist/productlist.component';
import { ProductItemComponent } from './components/cart/productlist/product-item/product-item.component';
import { ShoppingComponent } from './components/cart/shopping/shopping.component';
import { CartItemComponent } from './components/cart/shopping/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    FiltersComponent,
    ProductlistComponent,
    ProductItemComponent,
    ShoppingComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
