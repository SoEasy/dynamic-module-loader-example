(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('lib', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global.lib = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LibService = /** @class */ (function () {
        function LibService() {
        }
        LibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LibService.ctorParameters = function () { return []; };
        /** @nocollapse */ LibService.ngInjectableDef = i0.defineInjectable({ factory: function LibService_Factory() { return new LibService(); }, token: LibService, providedIn: "root" });
        return LibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LibComponent = /** @class */ (function () {
        function LibComponent() {
        }
        /**
         * @return {?}
         */
        LibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-lib',
                        template: "\n    <p>\n      lib works!\n        <a routerLink=\"/p/home\">Home page</a>\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        LibComponent.ctorParameters = function () { return []; };
        return LibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AnotherComponent = /** @class */ (function () {
        function AnotherComponent() {
        }
        /**
         * @return {?}
         */
        AnotherComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AnotherComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-another',
                        template: "<p>\n  another works!\n  <a [routerLink]=\"['/p/home']\">Main page</a>\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AnotherComponent.ctorParameters = function () { return []; };
        return AnotherComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LibModule = /** @class */ (function () {
        function LibModule(router$$1, componentFactoryResolver) {
            console.log('Динамически загруженный модуль родился');
            // примитивный патчинг роутера
            console.log(router$$1.config);
            var /** @type {?} */ pageRoutes = router$$1.config.find(function (config) { return config.path === 'p'; });
            pageRoutes.children.push(/** @type {?} */ ({
                path: '',
                // ComponentFactoryResolver этого модуля
                _loadedConfig: { module: { componentFactoryResolver: componentFactoryResolver } },
                children: [
                    { path: 'lib1', component: LibComponent, },
                    { path: 'lib2', component: AnotherComponent }
                ]
            }));
            router$$1.resetConfig(router$$1.config);
        }
        LibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            LibComponent,
                            AnotherComponent
                        ],
                        imports: [
                            router.RouterModule.forChild([])
                        ],
                        exports: [
                            LibComponent,
                            AnotherComponent
                        ],
                        entryComponents: [
                            LibComponent,
                            AnotherComponent
                        ]
                    },] }
        ];
        /** @nocollapse */
        LibModule.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: i0.ComponentFactoryResolver }
            ];
        };
        return LibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LibService = LibService;
    exports.LibComponent = LibComponent;
    exports.LibModule = LibModule;
    exports.ɵa = AnotherComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbGliL2xpYi9saWIuc2VydmljZS50cyIsIm5nOi8vbGliL2xpYi9saWIuY29tcG9uZW50LnRzIiwibmc6Ly9saWIvbGliL2Fub3RoZXIvYW5vdGhlci5jb21wb25lbnQudHMiLCJuZzovL2xpYi9saWIvbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGxpYiB3b3JrcyFcbiAgICAgICAgPGEgcm91dGVyTGluaz1cIi9wL2hvbWVcIj5Ib21lIHBhZ2U8L2E+XG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5vdGhlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm90aGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5vdGhlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5vdGhlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbm90aGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hbm90aGVyL2Fub3RoZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpYkNvbXBvbmVudCB9IGZyb20gJy4vbGliLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExpYkNvbXBvbmVudCxcbiAgICBBbm90aGVyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW10pXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMaWJDb21wb25lbnQsXG4gICAgQW5vdGhlckNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBMaWJDb21wb25lbnQsXG4gICAgQW5vdGhlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExpYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCfDkMKUw5DCuMOQwr3DkMKww5DCvMOQwrjDkcKHw5DCtcORwoHDkMK6w5DCuCDDkMK3w5DCsMOQwrPDkcKAw5HCg8OQwrbDkMK1w5DCvcOQwr3DkcKLw5DCuSDDkMK8w5DCvsOQwrTDkcKDw5DCu8ORwowgw5HCgMOQwr7DkMK0w5DCuMOQwrvDkcKBw5HCjycpO1xuICAgIC8vIMOQwr/DkcKAw5DCuMOQwrzDkMK4w5HCgsOQwrjDkMKyw5DCvcORwovDkMK5IMOQwr/DkMKww5HCgsORwofDkMK4w5DCvcOQwrMgw5HCgMOQwr7DkcKDw5HCgsOQwrXDkcKAw5DCsFxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5jb25maWcpO1xuICAgIGNvbnN0IHBhZ2VSb3V0ZXMgPSByb3V0ZXIuY29uZmlnLmZpbmQoY29uZmlnID0+IGNvbmZpZy5wYXRoID09PSAncCcpO1xuICAgIHBhZ2VSb3V0ZXMuY2hpbGRyZW4ucHVzaChcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIC8vIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciDDkcKNw5HCgsOQwr7DkMKzw5DCviDDkMK8w5DCvsOQwrTDkcKDw5DCu8ORwo9cbiAgICAgICAgX2xvYWRlZENvbmZpZzogeyBtb2R1bGU6IHsgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHBhdGg6ICdsaWIxJywgY29tcG9uZW50OiBMaWJDb21wb25lbnQsIH0sXG4gICAgICAgICAgeyBwYXRoOiAnbGliMicsIGNvbXBvbmVudDogQW5vdGhlckNvbXBvbmVudCB9XG4gICAgICAgIF1cbiAgICAgIH0gYXMgYW55XG4gICAgKTtcbiAgICByb3V0ZXIucmVzZXRDb25maWcocm91dGVyLmNvbmZpZyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50Iiwicm91dGVyIiwiTmdNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJSb3V0ZXIiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3lCQUpEOzs7Ozs7O0FDQUE7UUFjRTtTQUFpQjs7OztRQUVqQiwrQkFBUTs7O1lBQVI7YUFDQzs7b0JBZkZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDRGQUtUO3FCQUVGOzs7OzJCQVhEOzs7Ozs7O0FDQUE7UUFTRTtTQUFpQjs7OztRQUVqQixtQ0FBUTs7O1lBQVI7YUFDQzs7b0JBVkZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsMEZBQXVDOztxQkFFeEM7Ozs7K0JBTkQ7Ozs7Ozs7QUNBQTtRQXVCRSxtQkFDRUMsU0FBYyxFQUNkLHdCQUFrRDtZQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7O1lBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixxQkFBTSxVQUFVLEdBQUdBLFNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEdBQUEsQ0FBQyxDQUFDO1lBQ3JFLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFDdEI7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7O2dCQUVSLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLHdCQUF3QiwwQkFBQSxFQUFFLEVBQUU7Z0JBQ3ZELFFBQVEsRUFBRTtvQkFDUixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksR0FBRztvQkFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtpQkFDOUM7YUFDSyxFQUNULENBQUM7WUFDRkEsU0FBTSxDQUFDLFdBQVcsQ0FBQ0EsU0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DOztvQkF0Q0ZDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUU7NEJBQ1osWUFBWTs0QkFDWixnQkFBZ0I7eUJBQ2pCO3dCQUNELE9BQU8sRUFBRTs0QkFDUEMsbUJBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO3lCQUMxQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsWUFBWTs0QkFDWixnQkFBZ0I7eUJBQ2pCO3dCQUNELGVBQWUsRUFBRTs0QkFDZixZQUFZOzRCQUNaLGdCQUFnQjt5QkFDakI7cUJBQ0Y7Ozs7O3dCQXBCUUMsYUFBTTt3QkFESUMsMkJBQXdCOzs7d0JBQTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==