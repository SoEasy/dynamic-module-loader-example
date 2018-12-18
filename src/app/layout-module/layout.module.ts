import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullscreenAppComponent } from './components/fullscreen-app/fullscreen-app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([])
  ],
  providers: [],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FullscreenAppComponent
  ],
  entryComponents: [
    LayoutComponent,
    FullscreenAppComponent
  ]
})
export class LayoutModule {}
