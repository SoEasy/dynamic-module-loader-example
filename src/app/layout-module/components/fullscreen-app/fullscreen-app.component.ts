import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullscreen-app',
  templateUrl: './fullscreen-app.component.html',
  styleUrls: ['./fullscreen-app.component.styl']
})
export class FullscreenAppComponent {
  constructor(private router: Router) {}

  closeFullscreenApp(): void {
    this.router.navigateByUrl('/');
  }
}
