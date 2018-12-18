import { BrowserModule } from '@angular/platform-browser';
import { Compiler, ComponentFactoryResolver, Injector, NgModule, NgModuleRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout-module/layout.module';
import { getRoutes } from 'src/app/layout-module/layout.routes';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import * as AngularCore from '@angular/core';
import * as AngularRouter from '@angular/router';

function evalModuleSource(source: string) {
  const exports = {};
  const deps = {
    '@angular/core': AngularCore,
    '@angular/router': AngularRouter
  };
  const require = name => deps[name];

  eval(source);

  return exports['LibModule'];
}

function patchInjector(componentFactoryResolver: ComponentFactoryResolver): void {
  (componentFactoryResolver as any)._factories.forEach(
    (value, key) => {
      (componentFactoryResolver as any)._parent._factories.set(key, value);
    }
  );
}

let appRoutes = [];
if (true) {
  appRoutes = getRoutes();
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    compiler: Compiler,
    injector: Injector
  ) {
    fetch('/assets/compiled-module.js').then(response => response.text()).then(
      evalModuleSource
    ).then(
      moduleObject => compiler.compileModuleSync(moduleObject)
    ).then(
      moduleFactory => moduleFactory.create(injector)
    ).then(
      // (moduleRef: NgModuleRef) => patchInjector((moduleRef.injector as any).componentFactoryResolver)
    );
  }
}
