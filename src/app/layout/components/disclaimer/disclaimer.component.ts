import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  @Input() texts: Array<string>

  constructor() { }

  ngOnInit() {
  }

}
