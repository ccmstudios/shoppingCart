import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

shoppingItems= [
  {
    id: 1, productId: 1,qty: 2, price: 200
  },
  {
    id: 2, productId: 2, qty: 3, price: 150
  },
  {
    id: 3, productId: 3, qty: 5, price: 300
  },
  {
    id: 4, productId: 4, qty: 6, price: 100
  },
]

cartTotal = 0

  constructor() { }

  ngOnInit() {
    this.shoppingItems.forEach(items => {
      this.cartTotal += (items.qty * items.price)
    })
  }

}
