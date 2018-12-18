import { Routes } from '@angular/router';
import { MainPageComponent } from './../main-page/main-page.component';
import { FullscreenAppComponent } from './components/fullscreen-app/fullscreen-app.component';
import { LayoutComponent } from './components';

const routes: Routes = [
  {
    // сюда pages
    path: 'p',
    component: LayoutComponent,
    children: [
      { path: 'home', component: MainPageComponent }
    ]
  },
  // Сюда полноэкранные приложения
  {
    path: 'app',
    component: FullscreenAppComponent,
    children: []
  },
  { path: '',
    redirectTo: 'p/home',
    pathMatch: 'full'
  },
  // TODO Not Found
  { path: '**', redirectTo: 'p/home' }
];

export function getRoutes(override?: { p?: Array<any>, app?: Array<any> }): Routes {
  override && override.p && (routes[0].children as any).push(...override.p);
  override && override.app && (routes[1].children as any).push(...override.app);
  return routes;
}
