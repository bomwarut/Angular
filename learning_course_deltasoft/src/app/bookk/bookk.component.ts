import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Book } from '../type/Book';

@Component({
  selector: 'app-bookk',
  templateUrl: './bookk.component.html',
  styleUrls: ['./bookk.component.scss']
})
export class BookkComponent implements OnInit{
 @Input() book : Book = {} as Book;

  isInCart:Boolean = false;

 @Output() bookEmitter = new EventEmitter<Book>();

  constructor(private cartService:CartService) {}

  ngOnInit(): void{}

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);    
  }
}
