"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _apiRunnerBrowser = require("./api-runner-browser");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _router = require("@reach/router");

var _utils = require("@reach/router/lib/utils");

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

var _domready = _interopRequireDefault(require("domready"));

var _navigation = require("./navigation");

var _emitter = _interopRequireDefault(require("./emitter"));

var _pageRenderer = _interopRequireDefault(require("./page-renderer"));

var _asyncRequires = _interopRequireDefault(require("./async-requires"));

var _loader = _interopRequireWildcard(require("./loader"));

var _loadDirectlyOr = _interopRequireDefault(require("./load-directly-or-404"));

var _ensureResources = _interopRequireDefault(require("./ensure-resources"));

var _jsxFileName = "/Users/misiek/dev/gatsby/packages/gatsby/cache-dir/production-app.js";
window.___emitter = _emitter.default;
window.asyncRequires = _asyncRequires.default;
window.___emitter = _emitter.default;
window.___loader = _loader.default;

_loader.default.addPagesArray([window.page]);

_loader.default.addDataPaths({
  [window.page.jsonName]: window.dataPath
});

_loader.default.addProdRequires(_asyncRequires.default);

(0, _loader.setApiRunnerForLoader)(_apiRunnerBrowser.apiRunner);
(0, _navigation.init)(); // Let the site/plugins run code very early.

(0, _apiRunnerBrowser.apiRunnerAsync)(`onClientEntry`).then(() => {
  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if ((0, _apiRunnerBrowser.apiRunner)(`registerServiceWorker`).length > 0) {
    require(`./register-service-worker`);
  }

  class RouteHandler extends _react.default.Component {
    render() {
      let location = this.props.location;
      return _react.default.createElement(_ensureResources.default, {
        location: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, ({
        pageResources,
        location
      }) => _react.default.createElement(_navigation.RouteUpdates, {
        location: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, _react.default.createElement(_gatsbyReactRouterScroll.ScrollContext, {
        location: location,
        shouldUpdateScroll: _navigation.shouldUpdateScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, _react.default.createElement(_pageRenderer.default, (0, _extends2.default)({}, this.props, {
        location: location,
        pageResources: pageResources
      }, pageResources.json, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })))));
    }

  }

  const _window = window,
        page = _window.page,
        browserLoc = _window.location; // TODO: comment what this check does

  if (page && page.path !== `/404.html` && __PATH_PREFIX__ + page.path !== browserLoc.pathname && !page.path.match(/^\/offline-plugin-app-shell-fallback\/?$/) && (!page.matchPath || !(0, _utils.match)(__PATH_PREFIX__ + page.matchPath, browserLoc.pathname))) {
    (0, _router.navigate)(__PATH_PREFIX__ + page.path + browserLoc.search + browserLoc.hash, {
      replace: true
    });
  }

  _loader.default.getResourcesForPathname(browserLoc.pathname).then(resources => {
    if (!resources || resources.page.path === `/404.html`) {
      return (0, _loadDirectlyOr.default)(resources, browserLoc.pathname + browserLoc.search + browserLoc.hash, true);
    }

    return null;
  }).then(() => {
    const Root = () => (0, _react.createElement)(_router.Router, {
      basepath: __PATH_PREFIX__
    }, (0, _react.createElement)(RouteHandler, {
      path: `/*`
    }));

    const WrappedRoot = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
      element: _react.default.createElement(Root, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: void 0
      })
    }, _react.default.createElement(Root, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: void 0
    }), ({
      result
    }) => {
      return {
        element: result
      };
    }).pop();

    let NewRoot = () => WrappedRoot;

    const renderer = (0, _apiRunnerBrowser.apiRunner)(`replaceHydrateFunction`, undefined, _reactDom.default.hydrate)[0];
    (0, _domready.default)(() => {
      renderer(_react.default.createElement(NewRoot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: void 0
      }), typeof window !== `undefined` ? document.getElementById(`___gatsby`) : void 0, () => {
        (0, _apiRunnerBrowser.apiRunner)(`onInitialClientRender`);
      });
    });
  });
});