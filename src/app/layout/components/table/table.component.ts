import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: Table;

  constructor() { }

  ngOnInit() {
  }

}
