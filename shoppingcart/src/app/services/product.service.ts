import { Injectable } from '@angular/core';
import { Product } from '../models/product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
// Populate products from API or other data source
  products: Product[] = [
    new Product(1,"Product 1", "This is the Product 1 description", 100, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(2,"Product 2", "This is the Product 2 description", 120, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(3,"Product 3", "This is the Product 3 description", 140, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(4,"Product 4", "This is the Product 4 description", 150, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(5,"Product 5", "This is the Product 5 description", 160, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(5,"Product 6", "This is the Product 6 description", 170, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(5,"Product 7", "This is the Product 7 description", 180, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(5,"Product 8", "This is the Product 8 description", 190, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
    new Product(5,"Product 9", "This is the Product 9 description", 200, "https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg"),
  ]
  constructor() { }

  getProducts(): Product[] {
    // populate products from an API and return an observable
    return this.products
  }
}
