"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

require("roboto-fontface/css/roboto/roboto-fontface.css");

require("@mdi/font/css/materialdesignicons.css");

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

var requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/);

requireComponent.keys().forEach(function (fileName) {
  var componentConfig = requireComponent(fileName);
  var componentName = 'upperFirst'('camelCase'(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));

  _vue["default"].component(componentName, componentConfig["default"] || componentConfig);
});
new _vue["default"]({
  vuetify: _vuetify["default"],
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');