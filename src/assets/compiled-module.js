(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/core')) :
        typeof define === 'function' && define.amd ? define('lib', ['exports', '@angular/router', '@angular/core'], factory) :
            (factory((global.lib = {}),global.ng.router,global.ng.core));
}(this, (function (exports,router,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<p>\n  another works!\n  <a [routerLink]=\"['/p/lib_main']\">\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043C\u043E\u0434\u0443\u043B\u044F</a>\n</p>\n",
                    styles: [""]
                }] }
        ];
        /** @nocollapse */
        AnotherComponent.ctorParameters = function () { return []; };
        return AnotherComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibModule = /** @class */ (function () {
        function LibModule(router$$1) {
            console.log('Динамически загруженный модуль родился');
            // примитивный патчинг роутера
            console.log(router$$1.config);
            /** @type {?} */
            var pageRoutes = router$$1.config.find(function (config) { return config.path === 'p'; });
            pageRoutes.children.push({ path: 'lib1', component: LibComponent }, { path: 'lib2', component: AnotherComponent });
            console.log(router$$1.config);
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LibService = LibService;
    exports.LibComponent = LibComponent;
    exports.LibModule = LibModule;
    exports.ɵa = AnotherComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=lib.umd.js.map