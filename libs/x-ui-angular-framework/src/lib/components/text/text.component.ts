import { Component, Input, OnInit } from '@angular/core';
import { TextConfig } from '../../interfaces/text-config.interface';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
})
export class TextComponent implements OnInit {
  @Input() config!: TextConfig;

  constructor() {}

  ngOnInit(): void {}
}
