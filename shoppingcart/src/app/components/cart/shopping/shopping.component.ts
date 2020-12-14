import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

shoppingItems= [
 
]

cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
      this.shoppingItems.push({
        productName: product.name,
        qty: 1,
        price: product.price
      
      })
      this.cartTotal=0;
      this.shoppingItems.forEach(items => {
        this.cartTotal += (items.qty * items.price)
      })
      
    })
  }

}
