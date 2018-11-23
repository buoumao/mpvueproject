require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([3],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__store_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_vue__ = __webpack_require__(4);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

//声明当前组件的类型
App.mpType = 'app';

//将store对象放置Vue的原型上，为的是每个实例都可以使用
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_1__store_store___default.a;

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(app);

app.$mount();

/***/ }),

/***/ 32:
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(7);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_app_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0501a54", Component.options)
  } else {
    hotAPI.reload("data-v-f0501a54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ })

},[2]);
//# sourceMappingURL=app.js.map