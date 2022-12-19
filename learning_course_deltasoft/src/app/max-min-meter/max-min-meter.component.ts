import { Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss']
})
export class MaxMinMeterComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() minlabel = 'minlabel';
  @Input() maxlabel = 'maxlabel';

} 
