import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  templateUrl: './square-flex.component.html',
  styleUrls: ['./square-flex.component.scss']
})
export class SquareFlexComponent implements OnInit{
  @Input() divWidth = 200;
  @Input() divHeight = 200;

  ngOnInit(): void {
  }

  constructor(){}
}
