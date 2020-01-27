(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/BookForClient.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/BookForClient.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../http.common */ "./resources/js/http.common.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BookForClient",
  data: function data() {
    return {
      blocks: [],
      floors: [],
      floor_units: [],
      block_id: '',
      floor_id: '',
      email: '',
      user_id: '',
      project_id: '',
      show_blocks: false,
      show_floors: false,
      show_units: false,
      show_select: true,
      show_results: false,
      show_projects: false,
      bookings: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['units', 'projects']), {
    book: function book() {
      if (this.units.length > 0) {
        return true;
      }
    }
  }),
  created: function created() {
    this.$store.dispatch('fetchProjects');
  },
  methods: {
    retrieveProjects: function retrieveProjects() {
      var _this = this;

      _http_common__WEBPACK_IMPORTED_MODULE_0__["HTTP"].post("get_user", {
        email: this.email
      }).then(function (res) {
        if (res.data === 'User not found') {
          alert("Client not found");
        } else {
          _this.$store.dispatch('fetchProjects');

          _this.user_id = res.data.id;
          console.log(_this.user_id);
          _this.show_projects = true;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    retrieveBlocks: function retrieveBlocks() {
      var _this2 = this;

      this.show_blocks = true;
      _http_common__WEBPACK_IMPORTED_MODULE_0__["HTTP"].get("block/project_blocks/".concat(this.project_id)).then(function (res) {
        _this2.blocks = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    retrieveFloor: function retrieveFloor() {
      var _this3 = this;

      this.show_floors = true;
      _http_common__WEBPACK_IMPORTED_MODULE_0__["HTTP"].get("block/block_floors/".concat(this.block_id)).then(function (res) {
        _this3.floors = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    retrieveUnits: function retrieveUnits() {
      var _this4 = this;

      this.show_units = true;
      _http_common__WEBPACK_IMPORTED_MODULE_0__["HTTP"].get("block/floor_units/".concat(this.floor_id)).then(function (res) {
        _this4.floor_units = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    selectUnit: function selectUnit(id) {
      this.$store.dispatch('selectUnit', id);
    },
    removeUnit: function removeUnit(id) {
      this.$store.dispatch('removeUnit', id);
    },
    makeReservation: function makeReservation() {
      var _this5 = this;

      _http_common__WEBPACK_IMPORTED_MODULE_0__["HTTP"].post("book_apartment", {
        units: this.units
      }).then(function (res) {
        _this5.bookings = res.data;
        _this5.show_select = false;
        _this5.show_results = true;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    bookForClient: function bookForClient() {
      var _this6 = this;

      _http_common__WEBPACK_IMPORTED_MODULE_0__["HTTP"].post("book_apartment_for_client", {
        units: this.units,
        user: this.user_id
      }).then(function (res) {
        _this6.bookings = res.data;
        _this6.show_select = false;
        _this6.show_results = true;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    bookAgain: function bookAgain() {
      this.show_select = true;
      window.location.href = "/the_project";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/BookForClient.vue?vue&type=template&id=2935aecc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Project/BookForClient.vue?vue&type=template&id=2935aecc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("div", [
        _c("label", { attrs: { for: "project" } }, [_vm._v("Client")]),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email"
            }
          ],
          attrs: { type: "email" },
          domProps: { value: _vm.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.email = $event.target.value
            }
          }
        }),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            on: { click: _vm.retrieveProjects }
          },
          [_vm._v("Next")]
        )
      ]),
      _vm._v(" "),
      _vm.show_projects
        ? _c("div", [
            _c("label", { attrs: { for: "project" } }, [_vm._v("Project")]),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.project_id,
                    expression: "project_id"
                  }
                ],
                staticClass: "custom-select",
                attrs: { id: "project" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.project_id = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(_vm.projects, function(project) {
                return _c("option", { domProps: { value: project.id } }, [
                  _vm._v(_vm._s(project.name))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: { click: _vm.retrieveBlocks }
              },
              [_vm._v("Next")]
            ),
            _vm._v(" "),
            _c("br"),
            _c("br")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.show_blocks
        ? _c("div", [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Block")]),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.block_id,
                    expression: "block_id"
                  }
                ],
                staticClass: "custom-select",
                attrs: { id: "name" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.block_id = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(_vm.blocks, function(block) {
                return _c("option", { domProps: { value: block.id } }, [
                  _vm._v(_vm._s(block.name))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: { click: _vm.retrieveFloor }
              },
              [_vm._v("Next")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show_floors,
              expression: "show_floors"
            }
          ]
        },
        [
          _c("label", { attrs: { for: "floor" } }, [_vm._v("Floors in block")]),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.floor_id,
                  expression: "floor_id"
                }
              ],
              staticClass: "custom-select",
              attrs: { id: "floor" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.floor_id = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.floors, function(floor) {
              return _c("option", { domProps: { value: floor.id } }, [
                _vm._v("Floor " + _vm._s(floor.number))
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: { click: _vm.retrieveUnits }
            },
            [_vm._v("Next")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show_units,
              expression: "show_units"
            }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "grid-container" },
            _vm._l(_vm.floor_units, function(unit) {
              return _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn-success btn",
                    on: {
                      click: function($event) {
                        return _vm.selectUnit(unit.id)
                      }
                    }
                  },
                  [_vm._v(_vm._s(unit.number))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn-warning btn",
                    on: {
                      click: function($event) {
                        return _vm.removeUnit(unit.id)
                      }
                    }
                  },
                  [_vm._v(_vm._s(unit.number))]
                )
              ])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _vm.book
        ? _c("div", [
            _c("p", [_vm._v("Selected units: " + _vm._s(_vm.units))]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: { click: _vm.bookForClient }
              },
              [_vm._v("Book")]
            )
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.show_results
      ? _c("div", [
          _c("h1", [_vm._v("Successful Reserved")]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.bookings))]),
          _vm._v(" "),
          _c("button", { staticClass: "btn", on: { click: _vm.bookAgain } }, [
            _vm._v("Book again")
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Project/BookForClient.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Project/BookForClient.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookForClient_vue_vue_type_template_id_2935aecc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookForClient.vue?vue&type=template&id=2935aecc&scoped=true& */ "./resources/js/components/Project/BookForClient.vue?vue&type=template&id=2935aecc&scoped=true&");
/* harmony import */ var _BookForClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookForClient.vue?vue&type=script&lang=js& */ "./resources/js/components/Project/BookForClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookForClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookForClient_vue_vue_type_template_id_2935aecc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookForClient_vue_vue_type_template_id_2935aecc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2935aecc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Project/BookForClient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Project/BookForClient.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Project/BookForClient.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BookForClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/BookForClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Project/BookForClient.vue?vue&type=template&id=2935aecc&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Project/BookForClient.vue?vue&type=template&id=2935aecc&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForClient_vue_vue_type_template_id_2935aecc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BookForClient.vue?vue&type=template&id=2935aecc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Project/BookForClient.vue?vue&type=template&id=2935aecc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForClient_vue_vue_type_template_id_2935aecc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForClient_vue_vue_type_template_id_2935aecc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);