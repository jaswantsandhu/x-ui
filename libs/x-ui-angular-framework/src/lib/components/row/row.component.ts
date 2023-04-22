import { Component, Input, OnInit } from '@angular/core';
import { RowConfig } from '../../interfaces/row-config.interface';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit {
  @Input() config!: RowConfig;

  constructor() {}

  ngOnInit(): void {}
}
