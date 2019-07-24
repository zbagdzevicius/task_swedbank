import { Component, OnInit, Input } from '@angular/core';
import { Amount } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  @Input() control: string;
  @Input() range: Amount;

  constructor() { }

  ngOnInit() {
  }

}
