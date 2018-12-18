import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib',
  template: `
    <p>
      lib works!
        <a routerLink="/p/home">Home page</a>
    </p>
  `,
  styles: []
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
