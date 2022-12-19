import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit{
  @Input() counter = 0;
  @Input() step = 1;
  @Output() counterChange = new EventEmitter();

  ngOnInit(): void {
  }
  
  constructor(){}

  decrease(){
    if(this.counter - this.step >= 0){
      this.counter = this.counter - this.step; 
      this.counterChange.emit(this.counter);
    }
  }
  
  increase(){
    if(this.counter + this.step < 100){
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter);
    }
  } 

}
