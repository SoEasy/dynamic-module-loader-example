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
        function LibModule(router$$1) {
            console.log('Динамически загруженный модуль родился');
            // примитивный патчинг роутера
            console.log(router$$1.config);
            var /** @type {?} */ pageRoutes = router$$1.config.find(function (config) { return config.path === 'p'; });
            pageRoutes.children.push({ path: 'lib1', component: LibComponent }, { path: 'lib2', component: AnotherComponent });
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
                { type: router.Router }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbGliL2xpYi9saWIuc2VydmljZS50cyIsIm5nOi8vbGliL2xpYi9saWIuY29tcG9uZW50LnRzIiwibmc6Ly9saWIvbGliL2Fub3RoZXIvYW5vdGhlci5jb21wb25lbnQudHMiLCJuZzovL2xpYi9saWIvbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGxpYiB3b3JrcyFcbiAgICAgICAgPGEgcm91dGVyTGluaz1cIi9wL2hvbWVcIj5Ib21lIHBhZ2U8L2E+XG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5vdGhlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm90aGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5vdGhlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5vdGhlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5vdGhlckNvbXBvbmVudCB9IGZyb20gJy4vYW5vdGhlci9hbm90aGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaWJDb21wb25lbnQgfSBmcm9tICcuL2xpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMaWJDb21wb25lbnQsXG4gICAgQW5vdGhlckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtdKVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTGliQ29tcG9uZW50LFxuICAgIEFub3RoZXJDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTGliQ29tcG9uZW50LFxuICAgIEFub3RoZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICBjb25zb2xlLmxvZygnw5DClMOQwrjDkMK9w5DCsMOQwrzDkMK4w5HCh8OQwrXDkcKBw5DCusOQwrggw5DCt8OQwrDDkMKzw5HCgMORwoPDkMK2w5DCtcOQwr3DkMK9w5HCi8OQwrkgw5DCvMOQwr7DkMK0w5HCg8OQwrvDkcKMIMORwoDDkMK+w5DCtMOQwrjDkMK7w5HCgcORwo8nKTtcbiAgICAvLyDDkMK/w5HCgMOQwrjDkMK8w5DCuMORwoLDkMK4w5DCssOQwr3DkcKLw5DCuSDDkMK/w5DCsMORwoLDkcKHw5DCuMOQwr3DkMKzIMORwoDDkMK+w5HCg8ORwoLDkMK1w5HCgMOQwrBcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIuY29uZmlnKTtcbiAgICBjb25zdCBwYWdlUm91dGVzID0gcm91dGVyLmNvbmZpZy5maW5kKGNvbmZpZyA9PiBjb25maWcucGF0aCA9PT0gJ3AnKTtcbiAgICBwYWdlUm91dGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICB7IHBhdGg6ICdsaWIxJywgY29tcG9uZW50OiBMaWJDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2xpYjInLCBjb21wb25lbnQ6IEFub3RoZXJDb21wb25lbnQgfVxuICAgICk7XG4gICAgcm91dGVyLnJlc2V0Q29uZmlnKHJvdXRlci5jb25maWcpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsInJvdXRlciIsIk5nTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt5QkFKRDs7Ozs7OztBQ0FBO1FBY0U7U0FBaUI7Ozs7UUFFakIsK0JBQVE7OztZQUFSO2FBQ0M7O29CQWZGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSw0RkFLVDtxQkFFRjs7OzsyQkFYRDs7Ozs7OztBQ0FBO1FBU0U7U0FBaUI7Ozs7UUFFakIsbUNBQVE7OztZQUFSO2FBQ0M7O29CQVZGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLDBGQUF1Qzs7cUJBRXhDOzs7OytCQU5EOzs7Ozs7O0FDQUE7UUF1QkUsbUJBQ0VDLFNBQWM7WUFFZCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7O1lBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixxQkFBTSxVQUFVLEdBQUdBLFNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEdBQUEsQ0FBQyxDQUFDO1lBQ3JFLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxFQUN6QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQzlDLENBQUM7WUFDRkEsU0FBTSxDQUFDLFdBQVcsQ0FBQ0EsU0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DOztvQkE5QkZDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUU7NEJBQ1osWUFBWTs0QkFDWixnQkFBZ0I7eUJBQ2pCO3dCQUNELE9BQU8sRUFBRTs0QkFDUEMsbUJBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO3lCQUMxQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsWUFBWTs0QkFDWixnQkFBZ0I7eUJBQ2pCO3dCQUNELGVBQWUsRUFBRTs0QkFDZixZQUFZOzRCQUNaLGdCQUFnQjt5QkFDakI7cUJBQ0Y7Ozs7O3dCQXBCUUMsYUFBTTs7O3dCQURmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==