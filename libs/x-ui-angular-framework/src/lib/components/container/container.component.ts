import { Component, Input, OnInit } from '@angular/core';
import { ContainerConfig } from '../../interfaces/container-config.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit {
  @Input() config!: ContainerConfig;

  constructor() {}

  ngOnInit(): void {}
}
