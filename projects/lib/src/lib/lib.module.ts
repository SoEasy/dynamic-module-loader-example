import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AnotherComponent } from './another/another.component';
import { LibComponent } from './lib.component';

@NgModule({
  declarations: [
    LibComponent,
    AnotherComponent
  ],
  imports: [
    RouterModule.forChild([])
  ],
  exports: [
    LibComponent,
    AnotherComponent
  ],
  entryComponents: [
    LibComponent,
    AnotherComponent
  ]
})
export class LibModule {
  constructor(
    router: Router
  ) {
    console.log('Динамически загруженный модуль родился');
    // примитивный патчинг роутера
    console.log(router.config);
    const pageRoutes = router.config.find(config => config.path === 'p');
    pageRoutes.children.push(
      { path: 'lib1', component: LibComponent },
      { path: 'lib2', component: AnotherComponent }
    );
    router.resetConfig(router.config);
  }
}
