"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

var _navigation = require("./navigation");

var _apiRunnerBrowser = require("./api-runner-browser");

var _syncRequires = _interopRequireDefault(require("./sync-requires"));

var _pages = _interopRequireDefault(require("./pages.json"));

var _loader = _interopRequireDefault(require("./loader"));

var _jsonStore = _interopRequireDefault(require("./json-store"));

var _ensureResources = _interopRequireDefault(require("./ensure-resources"));

var ErrorOverlay = _interopRequireWildcard(require("react-error-overlay")); // Report runtime errors


ErrorOverlay.startReportingRuntimeErrors({
  onError: () => {},
  filename: `/commons.js`
});
ErrorOverlay.setEditorHandler(errorLocation => window.fetch(`/__open-stack-frame-in-editor?fileName=` + window.encodeURIComponent(errorLocation.fileName) + `&lineNumber=` + window.encodeURIComponent(errorLocation.lineNumber || 1)));

if (window.__webpack_hot_middleware_reporter__ !== undefined) {
  // Report build errors
  window.__webpack_hot_middleware_reporter__.useCustomOverlay({
    showProblems(type, obj) {
      if (type !== `errors`) {
        ErrorOverlay.dismissBuildError();
        return;
      }

      ErrorOverlay.reportBuildError(obj[0]);
    },

    clear() {
      ErrorOverlay.dismissBuildError();
    }

  });
}

(0, _navigation.init)();

class RouteHandler extends _react.default.Component {
  render() {
    let location = this.props.location; // check if page exists - in dev pages are sync loaded, it's safe to use
    // loader.getPage

    let page = _loader.default.getPage(location.pathname);

    if (page) {
      return _react.default.createElement(_ensureResources.default, {
        location: location
      }, locationAndPageResources => _react.default.createElement(_navigation.RouteUpdates, {
        location: location
      }, _react.default.createElement(_gatsbyReactRouterScroll.ScrollContext, {
        location: location,
        shouldUpdateScroll: _navigation.shouldUpdateScroll
      }, _react.default.createElement(_jsonStore.default, (0, _extends2.default)({
        pages: _pages.default
      }, this.props, locationAndPageResources)))));
    } else {
      const dev404Page = _pages.default.find(p => /^\/dev-404-page\/?$/.test(p.path));

      const custom404 = locationAndPageResources => _loader.default.getPage(`/404.html`) ? _react.default.createElement(_jsonStore.default, (0, _extends2.default)({
        pages: _pages.default
      }, this.props, locationAndPageResources)) : null;

      return _react.default.createElement(_ensureResources.default, {
        location: location
      }, locationAndPageResources => (0, _react.createElement)(_syncRequires.default.components[dev404Page.componentChunkName], Object.assign({
        pages: _pages.default,
        custom404: custom404(locationAndPageResources)
      }, this.props)));
    }
  }

}

const Root = () => (0, _react.createElement)(_router.Router, {
  basepath: __PATH_PREFIX__
}, (0, _react.createElement)(RouteHandler, {
  path: `/*`
})); // Let site, plugins wrap the site e.g. for Redux.


const WrappedRoot = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
  element: _react.default.createElement(Root, null)
}, _react.default.createElement(Root, null), ({
  result,
  plugin
}) => {
  return {
    element: result
  };
}).pop();

var _default = () => WrappedRoot;

exports.default = _default;