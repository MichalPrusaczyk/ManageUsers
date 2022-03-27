import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'lib-icons',
  template: `
    <p>
      icons works!
    </p>
  `,
  styles: [
  ]
})
export class IconsComponent implements OnInit {

  constructor(private _registry: SvgIconRegistryService) { }

  ngOnInit(): void {
    this._registry.addSvg('tie-svgrepo-com', '')
  }

}
