import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() control: string;
  @Input() select: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
