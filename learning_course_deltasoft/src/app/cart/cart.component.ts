import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
constructor(private cartService:CartService){}

getCart(){
  return this.cartService.get();
}
}
