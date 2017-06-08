webpackJsonp([0],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientProjectsQuery = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  query getClientProjects($clientId: Int!, $name: JSON) {\n    projects(where: {client_id: $clientId, name: $name}) {\n      id\n      name,\n      todosCount,\n      todos {\n        id,\n        title\n      }\n    }\n}\n"], ["\n  query getClientProjects($clientId: Int!, $name: JSON) {\n    projects(where: {client_id: $clientId, name: $name}) {\n      id\n      name,\n      todosCount,\n      todos {\n        id,\n        title\n      }\n    }\n}\n"]);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(26);

var _item = __webpack_require__(234);

var _item2 = _interopRequireDefault(_item);

var _form = __webpack_require__(233);

var _form2 = _interopRequireDefault(_form);

var _section = __webpack_require__(235);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_Component) {
  _inherits(Projects, _Component);

  function Projects() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Projects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Projects.__proto__ || Object.getPrototypeOf(Projects)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      project: {},
      todo: {}
    }, _this2.openTodos = function (e) {
      e.preventDefault();
    }, _this2.searchProjects = function (e) {
      var _this = _this2;
      var variables = { name: { like: "%" + e.target.value + "%" } };

      _this2.props.data.fetchMore({ variables: variables,
        updateQuery: function updateQuery(previousResult, _ref2) {
          var fetchMoreResult = _ref2.fetchMoreResult,
              queryVariables = _ref2.queryVariables;

          console.log(fetchMoreResult);
          return _extends({}, previousResult, { projects: fetchMoreResult.projects });
        }
      });
    }, _this2.changeTodos = function (todo) {
      _this2.setState({ todo: todo });
    }, _this2.changeProject = function (project) {
      _this2.props.changeProject(project);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          _props$data = _props.data,
          _props$data$projects = _props$data.projects,
          projects = _props$data$projects === undefined ? [] : _props$data$projects,
          loading = _props$data.loading,
          client = _props.client;


      return _react2.default.createElement(
        "section",
        { className: "row" },
        _react2.default.createElement(
          "div",
          {
            className: "col-lg-5",
            style: { paddingTop: "20px", background: "rgba(0,0,0,0.2)" }
          },
          _react2.default.createElement(
            "h5",
            { style: { color: "#fff" } },
            "Projects for ",
            client.name
          ),
          _react2.default.createElement("input", {
            type: "text",
            onChange: this.searchProjects,
            className: "form-control",
            placeholder: "Search"
          }),
          _react2.default.createElement("br", null),
          _react2.default.createElement(_form2.default, { project: this.state.project, clientId: this.props.clientId }),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "ul",
            { style: { padding: 0, height: "80vh", overflow: "auto" } },
            !loading ? projects.map(function (project, i) {
              return _react2.default.createElement(
                "li",
                {
                  key: i,
                  style: { listStyle: "none" },
                  onClick: _this3.changeProject.bind(null, project)
                },
                _react2.default.createElement(_item2.default, {
                  changeTodos: _this3.changeTodos,
                  project: project,
                  selected: _this3.props.selected
                })
              );
            }) : _react2.default.createElement(
              "h3",
              null,
              "Loading..."
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-lg-7", style: { paddingTop: '20px' } },
          _react2.default.createElement(_section2.default, { todo: this.state.todo, project: this.props.selected })
        )
      );
    }
  }]);

  return Projects;
}(_react.Component);

var getClientProjectsQuery = exports.getClientProjectsQuery = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(getClientProjectsQuery, {
  options: function options(props) {
    return {
      variables: {
        clientId: props.clientId,
        order: [["id", "DESC"]]
      }
    };
  }
})(Projects);

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(232);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.cloneElement(this.props.children, this.props)
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

		_this.state = {
			email: '',
			password: ''
		};

		_this.handleChange = _this.handleChange.bind(_this);
		_this.login = _this.login.bind(_this);
		return _this;
	}

	_createClass(Login, [{
		key: 'handleChange',
		value: function handleChange(field, e) {
			var val = e.currentTarget.value;
			this.setState(_extends({}, this.state, _defineProperty({}, field, val)));
		}
	}, {
		key: 'login',
		value: function login(e) {
			e.preventDefault();
			console.log(this.state);
			_axios2.default.post('/login', this.state).then(function (_ref) {
				var data = _ref.data;

				if (data.success) {
					localStorage.setItem('token', data.token);
					window.location = '/home';
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'row', style: { height: '90vh' } },
				_react2.default.createElement(
					'div',
					{ className: 'col-lg-3', style: { background: '#19212F', padding: "40px" } },
					_react2.default.createElement(
						'form',
						null,
						_react2.default.createElement(
							'div',
							{ className: 'input-group' },
							_react2.default.createElement('input', { type: 'text', placeholder: 'email', className: 'form-control', onChange: this.handleChange.bind(null, 'email') })
						),
						_react2.default.createElement(
							'div',
							{ className: 'input-group', style: { marginTop: "20px" } },
							_react2.default.createElement('input', { type: 'password', placeholder: 'password', className: 'form-control', onChange: this.handleChange.bind(null, 'password') })
						),
						_react2.default.createElement(
							'div',
							{ className: 'row', style: { marginTop: "20px" } },
							_react2.default.createElement(
								'div',
								{ className: 'input-group col-lg-6' },
								_react2.default.createElement(
									'button',
									{
										className: 'btn',
										style: {
											float: "right",
											cursor: "pointer",
											color: "#fff",
											border: "1px solid #9CC0FA",
											background: 'rgba(0,0,0,.5)',
											width: '100%'
										},
										onClick: this.login
									},
									'Login'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'input-group col-lg-6' },
								_react2.default.createElement(
									'a',
									{
										className: 'btn',
										href: '/register',
										style: {
											float: "right",
											cursor: "pointer",
											color: "#fff",
											border: "1px solid #9CC0FA",
											background: 'rgba(0,0,0,.5)',
											width: '100%'
										}
									},
									'I am new'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
	_inherits(Register, _React$Component);

	function Register(props) {
		_classCallCheck(this, Register);

		var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

		_this.state = {
			email: '',
			password: ''
		};

		_this.handleChange = _this.handleChange.bind(_this);
		_this.store = _this.store.bind(_this);
		return _this;
	}

	_createClass(Register, [{
		key: 'handleChange',
		value: function handleChange(field, e) {
			this.setState(_extends({}, this.state, _defineProperty({}, field, e.currentTarget.value)));
		}
	}, {
		key: 'store',
		value: function store(e) {
			e.preventDefault();
			_axios2.default.post('/api/v1/users', this.state).then(function (res) {
				return console.log(res.data);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ onSubmit: this.store, className: 'col-md-5' },
				_react2.default.createElement(
					'div',
					{ className: 'input-group' },
					_react2.default.createElement('input', {
						type: 'text',
						placeholder: 'Email',
						className: 'form-control',
						onChange: this.handleChange.bind(null, 'email'),
						value: this.state.email
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'input-group' },
					_react2.default.createElement('input', {
						type: 'password',
						placeholder: 'Password',
						className: 'form-control',
						onChange: this.handleChange.bind(null, 'password'),
						value: this.state.password
					})
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.store },
					'Store'
				)
			);
		}
	}]);

	return Register;
}(_react2.default.Component);

exports.default = Register;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */

  

  /**
   * Module dependencies.
   */

  var pathtoRegexp = __webpack_require__(350);

  /**
   * Module exports.
   */

  module.exports = page;

  /**
   * Detect click event
   */
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

  /**
   * Perform initial dispatch.
   */

  var dispatch = true;


  /**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */
  var decodeURLComponents = true;

  /**
   * Base path.
   */

  var base = '';

  /**
   * Running flag.
   */

  var running;

  /**
   * HashBang option
   */

  var hashbang = false;

  /**
   * Previous context, for capturing
   * page exit events.
   */

  var prevContext;

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {String|Function} path
   * @param {Function} fn...
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page('*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(path);
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      page.start(path);
    }
  }

  /**
   * Callback functions.
   */

  page.callbacks = [];
  page.exits = [];

  /**
   * Current path being processed
   * @type {String}
   */
  page.current = '';

  /**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */

  page.len = 0;

  /**
   * Get or set basepath to `path`.
   *
   * @param {String} path
   * @api public
   */

  page.base = function(path) {
    if (0 === arguments.length) return base;
    base = path;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  page.start = function(options) {
    options = options || {};
    if (running) return;
    running = true;
    if (false === options.dispatch) dispatch = false;
    if (false === options.decodeURLComponents) decodeURLComponents = false;
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
    if (false !== options.click) {
      document.addEventListener(clickEvent, onclick, false);
    }
    if (true === options.hashbang) hashbang = true;
    if (!dispatch) return;
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  page.stop = function() {
    if (!running) return;
    page.current = '';
    page.len = 0;
    running = false;
    document.removeEventListener(clickEvent, onclick, false);
    window.removeEventListener('popstate', onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {String} path
   * @param {Object} state
   * @param {Boolean} dispatch
   * @return {Context}
   * @api public
   */

  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    if (false !== dispatch) page.dispatch(ctx);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {String} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object} [state]
   * @api public
   */

  page.back = function(path, state) {
    if (page.len > 0) {
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    }else{
      setTimeout(function() {
        page.show(base, state);
      });
    }
  };


  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {String} from - if param 'to' is undefined redirects to 'from'
   * @param {String} [to]
   * @api public
   */
  page.redirect = function(from, to) {
    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace(to);
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {String} path
   * @param {Object} state
   * @return {Context}
   * @api public
   */


  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) page.dispatch(ctx);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Object} ctx
   * @api private
   */

  page.dispatch = function(ctx) {
    var prev = prevContext,
      i = 0,
      j = 0;

    prevContext = ctx;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled(ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */

  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;

    if (hashbang) {
      current = base + location.hash.replace('#!', '');
    } else {
      current = location.pathname + location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    location.href = ctx.canonicalPath;
  }

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }

    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {str} URL component to decode
   */
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') { return val; }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @param {String} path
   * @param {Object} state
   * @api public
   */

  function Context(path, state) {
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Expose `Context`.
   */

  page.Context = Context;

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    page.len++;
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @param {String} path
   * @param {Object} options.
   * @api private
   */

  function Route(path, options) {
    options = options || {};
    this.path = path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path,
      this.keys = [],
      options.sensitive,
      options.strict);
  }

  /**
   * Expose `Route`.
   */

  page.Route = Route;

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {String} path
   * @param {Object} params
   * @return {Boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      if (key) {
        var val = decodeURLEncodedURIComponent(m[i]);
        if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
          params[key.name] = val;
        }        
      }

    }

    return true;
  };


  /**
   * Handle "populate" events.
   */

  var onpopstate = (function () {
    var loaded = false;
    if ('undefined' === typeof window) {
      return;
    }
    if (document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else {
        page.show(location.pathname + location.hash, undefined, undefined, false);
      }
    };
  })();
  /**
   * Handle "click" events.
   */

  function onclick(e) {

    if (1 !== which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;



    // ensure link
    var el = e.target;
    while (el && 'A' !== el.nodeName) el = el.parentNode;
    if (!el || 'A' !== el.nodeName) return;



    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    if (el.target) return;

    // x-origin
    if (!sameOrigin(el.href)) return;



    // rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;

    if (path.indexOf(base) === 0) {
      path = path.substr(base.length);
    }

    if (hashbang) path = path.replace('#!', '');

    if (base && orig === path) return;

    e.preventDefault();
    page.show(orig);
  }

  /**
   * Event button.
   */

  function which(e) {
    e = e || window.event;
    return null === e.which ? e.button : e.which;
  }

  /**
   * Check if `href` is the same origin.
   */

  function sameOrigin(href) {
    var origin = location.protocol + '//' + location.hostname;
    if (location.port) origin += ':' + location.port;
    return (href && (0 === href.indexOf(origin)));
  }

  page.sameOrigin = sameOrigin;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(194);

var _page2 = _interopRequireDefault(_page);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactApollo = __webpack_require__(26);

var _graphqlTag = __webpack_require__(109);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _login = __webpack_require__(192);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(193);

var _register2 = _interopRequireDefault(_register);

var _main = __webpack_require__(191);

var _main2 = _interopRequireDefault(_main);

var _dashboard = __webpack_require__(67);

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var networkInterface = (0, _reactApollo.createNetworkInterface)({
  uri: 'http://localhost:4040/graphql'
});

networkInterface.use([{
  applyMiddleware: function applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    var token = localStorage.getItem('token');

    if (token) {
      req.options.headers.authorization = token ? 'JWT ' + token : null;
      next();
    } else {
      _page2.default.redirect('/login');
    }
  }
}]);

var loggingAfterware = {
  applyAfterware: function applyAfterware(res, next) {
    if (res.response.status == 401) {
      _page2.default.redirect('/login');
    }
    return next();
  }
};

networkInterface.useAfter([loggingAfterware]);

var client = new _reactApollo.ApolloClient({
  networkInterface: networkInterface
});

function RootRender(component) {
  return (0, _reactDom.render)(_react2.default.createElement(
    _reactApollo.ApolloProvider,
    { client: client },
    _react2.default.createElement(
      _main2.default,
      null,
      component
    )
  ), document.getElementById('app'));
}

(0, _page2.default)('/', function (ctx) {
  RootRender(_react2.default.createElement(_login2.default, null));
});

(0, _page2.default)('/register', function (ctx) {
  RootRender(_react2.default.createElement(_register2.default, null));
});

(0, _page2.default)('/login', function () {
  RootRender(_react2.default.createElement(_login2.default, null));
});

(0, _page2.default)('/home', function (ctx) {
  RootRender(_react2.default.createElement(_dashboard2.default, null));
});

(0, _page2.default)();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\nmutation createClient($name: String!) {\n\tcreateClient(name: $name) {\n\t\tid\n    name\n  }\n}\n"], ["\nmutation createClient($name: String!) {\n\tcreateClient(name: $name) {\n\t\tid\n    name\n  }\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\nmutation updateClient($name: String!, $id: Int!) {\n\tupdateClient(id: $id, name: $name) {\n\t\tid\n    name\n\t}\n}\n"], ["\nmutation updateClient($name: String!, $id: Int!) {\n\tupdateClient(id: $id, name: $name) {\n\t\tid\n    name\n\t}\n}\n"]);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(26);

var _dashboard = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClientForm = function (_Component) {
  _inherits(ClientForm, _Component);

  function ClientForm(props) {
    _classCallCheck(this, ClientForm);

    var _this = _possibleConstructorReturn(this, (ClientForm.__proto__ || Object.getPrototypeOf(ClientForm)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      id: null,
      name: "",
      company_id: _this.props.companyId
    };
    return _this;
  }

  _createClass(ClientForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { action: "", onSubmit: this.handleSubmit },
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onChange.bind(null, "name"),
            value: this.state.name,
            placeholder: "Client Name"
          })
        )
      );
    }
  }]);

  return ClientForm;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (props) {
    if (Object.keys(props.client).length > 0) {
      _this2.setState(props.client);
    }
  };

  this.onChange = function (field, e) {
    _this2.setState(_defineProperty({}, field, e.target.value));
  };

  this.handleSubmit = function (e) {
    e.preventDefault();
    if (_this2.state.id) {} else {
      _this2.props.createClient({
        variables: { name: _this2.state.name },
        update: function update(store, _ref) {
          var createClient = _ref.data.createClient;

          var data = store.readQuery({
            query: _dashboard.getClientsQuery,
            variables: { order: [["id", "DESC"]] }
          });

          var clients = [createClient].concat(data.clients);

          store.writeQuery({
            query: _dashboard.getClientsQuery,
            variables: { order: [["id", "DESC"]] },
            data: { clients: clients } });
        }
      }).then(function (_ref2) {
        var data = _ref2.data;

        _this2.setState({ id: null, name: "", company_id: _this2.props.companyId });
      }).catch(function (error) {
        console.log("there was an error sending the query", error);
      });
    }
  };
};

var createClientMutation = (0, _reactApollo.gql)(_templateObject);

var updateClientMutation = (0, _reactApollo.gql)(_templateObject2);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(createClientMutation, { name: 'createClient' }), (0, _reactApollo.graphql)(updateClientMutation, { name: 'updateClient' }))(ClientForm);

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = function (_Component) {
  _inherits(Client, _Component);

  function Client(props) {
    _classCallCheck(this, Client);

    var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, props));

    _this.changeClient = function (client, e) {
      e.preventDefault();
      _this.props.changeClient(client);
    };

    _this.editClient = function (client, e) {
      e.preventDefault();
      _this.props.editClient(client);
    };

    _this.state = {
      edit: false
    };
    return _this;
  }

  _createClass(Client, [{
    key: "render",
    value: function render() {
      var client = this.props.client;


      return _react2.default.createElement(
        "li",
        {
          style: this.props.selected == client.id ? { listStyle: "none", background: "rgba(0,0,0, .3)" } : { listStyle: "none" }
        },
        _react2.default.createElement(
          "a",
          {
            href: "#",
            style: _defineProperty({
              display: "block",
              padding: "40px 0 10px 10px",
              color: "#fff"
            }, "padding", "20px 40px"),
            onClick: this.changeClient.bind(null, client)
          },
          _react2.default.createElement("i", { className: "ion-ios-folder-outline" }),
          " ",
          client.name
        )
      );
    }
  }]);

  return Client;
}(_react.Component);

exports.default = Client;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(230);

var _item2 = _interopRequireDefault(_item);

var _form = __webpack_require__(229);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clients = function (_Component) {
  _inherits(Clients, _Component);

  function Clients(props) {
    _classCallCheck(this, Clients);

    var _this = _possibleConstructorReturn(this, (Clients.__proto__ || Object.getPrototypeOf(Clients)).call(this, props));

    _this.changeClient = function (client, e) {
      _this.props.changeClient(client);
    };

    _this.searchClients = function (e) {
      _this.props.searchClients(e);
    };

    _this.editClient = function (client) {
      _this.setState({ client: client });
    };

    _this.addClient = function (client) {
      _this.props.addClient();
    };

    _this.state = {
      client: {}
    };
    return _this;
  }

  _createClass(Clients, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var clients = this.props.clients;


      return _react2.default.createElement(
        'section',
        { style: { position: 'relative' } },
        _react2.default.createElement(
          'header',
          { style: { position: "relative" } },
          _react2.default.createElement(
            'h5',
            null,
            _react2.default.createElement('i', { className: 'ion-ios-folder' }),
            ' Clients'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            onChange: this.searchClients,
            className: 'form-control',
            placeholder: 'Search'
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_form2.default, {
            companyId: this.props.companyId,
            client: this.state.client,
            addClient: this.addClient
          }),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'ul',
          { style: { padding: "0", height: "60vh", overflow: "auto" } },
          clients.map(function (client, i) {
            return _react2.default.createElement(_item2.default, {
              key: i,
              changeClient: _this2.changeClient,
              editClient: _this2.editClient,
              selected: _this2.props.selected.id,
              client: client
            });
          })
        )
      );
    }
  }]);

  return Clients;
}(_react.Component);

exports.default = Clients;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			var headerStyle = {
				background: '#fff',
				height: '80px',
				width: '100%',
				padding: '10px 40px'
			};

			var logoStyle = {};

			return _react2.default.createElement(
				'header',
				{ style: headerStyle },
				_react2.default.createElement('img', { src: '/logo.png', alt: '', width: '120px' })
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\nmutation createProject($name: String!, $clientId:Int!) {\n  createProject(name: $name, client_id: $clientId) {\n    id\n    name\n    todosCount\n    todos {\n      id\n      title\n    }\n  }\n}\n"], ["\nmutation createProject($name: String!, $clientId:Int!) {\n  createProject(name: $name, client_id: $clientId) {\n    id\n    name\n    todosCount\n    todos {\n      id\n      title\n    }\n  }\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\nmutation updateProject($projectId: Int!, $name:String!, $clientId:Int!) {\n  createProject(name: $name, client_id: $clientId) {\n    id\n    name\n  }\n}\n"], ["\nmutation updateProject($projectId: Int!, $name:String!, $clientId:Int!) {\n  createProject(name: $name, client_id: $clientId) {\n    id\n    name\n  }\n}\n"]);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(26);

var _dashboard = __webpack_require__(67);

var _section = __webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectForm = function (_Component) {
  _inherits(ProjectForm, _Component);

  function ProjectForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProjectForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectForm.__proto__ || Object.getPrototypeOf(ProjectForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      id: null,
      name: "",
      client_id: _this.props.clientId
    }, _this.componentWillReceiveProps = function (props) {
      if (Object.keys(props.project).length > 0) {
        _this.setState(props.project);
      }
    }, _this.onChange = function (field, e) {
      _this.setState(_defineProperty({}, field, e.target.value));
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.state.id) {} else {
        _this.props.createProject({
          variables: { name: _this.state.name, clientId: _this.props.clientId },
          update: function update(store, _ref2) {
            var createProject = _ref2.data.createProject;

            var data = store.readQuery({
              query: _section.getClientProjectsQuery,
              variables: { clientId: _this.props.clientId }
            });
            data.projects.push(createProject);
            store.writeQuery({ query: _section.getClientProjectsQuery, variables: { clientId: _this.props.clientId }, data: data });
          }

        }).then(function (_ref3) {
          var createProject = _ref3.data.createProject;

          _this.setState({ id: null, name: "", client_id: null });
        }).catch(function (error) {
          console.log("there was an error sending the query", error);
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProjectForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { action: "", onSubmit: this.handleSubmit },
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onChange.bind(null, "name"),
            value: this.state.name,
            placeholder: "Project Name"
          })
        )
      );
    }
  }]);

  return ProjectForm;
}(_react.Component);

var createProjectMutation = (0, _reactApollo.gql)(_templateObject);

var updateProjectMutation = (0, _reactApollo.gql)(_templateObject2);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(createProjectMutation, { name: 'createProject' }), (0, _reactApollo.graphql)(updateProjectMutation, { name: 'updateProject' }))(ProjectForm);

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectTodos = function (_Component) {
  _inherits(ProjectTodos, _Component);

  function ProjectTodos() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProjectTodos);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectTodos.__proto__ || Object.getPrototypeOf(ProjectTodos)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.toggleShow = function (e) {
      e.preventDefault();
      _this.setState({ show: !_this.state.show });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProjectTodos, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          project = _props.project,
          selected = _props.selected;
      var todos = project.todos;


      return _react2.default.createElement(
        "div",
        {
          style: project.id == selected.id ? { background: "rgba(255,255,255, .1)" } : {}
        },
        _react2.default.createElement(
          "a",
          {
            style: _defineProperty({
              display: "block",
              padding: "40px 0 10px 10px",
              color: "#fff"
            }, "padding", "20px 40px"),
            href: "#",
            onClick: this.toggleShow
          },
          _react2.default.createElement("i", { className: "ion-ios-folder-outline" }),
          " ",
          this.props.project.name,
          " ",
          this.props.project.todosCount
        ),
        _react2.default.createElement(
          "ul",
          {
            style: this.state.show ? { display: "block", padding: "0 0 0 60px", listStyle: "none" } : { display: "none" }
          },
          todos.length == 0 ? _react2.default.createElement(
            "a",
            { href: "" },
            "Create todo"
          ) : '',
          todos.map(function (todo, i) {
            return _react2.default.createElement(
              "li",
              { key: i, style: { color: "#fff", padding: "10px", background: 'rgba(0,0,0,0.2 )' } },
              _react2.default.createElement(
                "a",
                {
                  style: { color: "#fff" },
                  href: "#",
                  onClick: _this2.props.changeTodos.bind(null, todo)
                },
                todo.title
              )
            );
          })
        )
      );
    }
  }]);

  return ProjectTodos;
}(_react.Component);

exports.default = ProjectTodos;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  query getTodo($id: Int!) {\n  todo(where: {id: $id}) {\n\t\tid\n    title\n    content\n    created_at\n    author {\n      name\n    }\n    subtodos {\n      content\n    }\n  }\n}\n"], ["\n  query getTodo($id: Int!) {\n  todo(where: {id: $id}) {\n\t\tid\n    title\n    content\n    created_at\n    author {\n      name\n    }\n    subtodos {\n      content\n    }\n  }\n}\n"]);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(26);

var _form = __webpack_require__(450);

var _form2 = _interopRequireDefault(_form);

var _subtodo = __webpack_require__(451);

var _subtodo2 = _interopRequireDefault(_subtodo);

var _fecha = __webpack_require__(452);

var _fecha2 = _interopRequireDefault(_fecha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tasks = function (_Component) {
  _inherits(Tasks, _Component);

  function Tasks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tasks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tasks.__proto__ || Object.getPrototypeOf(Tasks)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showEditor: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tasks, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$project = _props.project,
          project = _props$project === undefined ? {} : _props$project,
          _props$data = _props.data,
          data = _props$data === undefined ? {} : _props$data;

      var todo = data.todo ? data.todo : {};
      console.log('tasks props:', this.props);

      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "h5",
            { style: { float: "left" } },
            "Task for ",
            project.name
          ),
          _react2.default.createElement(
            "div",
            { style: { float: "left", width: "100%" } },
            _react2.default.createElement(
              "h4",
              null,
              todo.title
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "span",
              null,
              "Created: ",
              todo.created_at ? _fecha2.default.format(Date.parse(todo.created_at), 'dddd MMMM DD, YYYY') : ''
            )
          )
        ),
        this.state.showEditor ? _react2.default.createElement(_form2.default, { container: "taskEditor" }) : '',
        Object.keys(todo).length > 0 ? _react2.default.createElement(
          "div",
          { style: { float: "left", width: "100%", height: "80vh", overflow: "auto" } },
          _react2.default.createElement(
            "section",
            { style: { color: "#333", margin: "20px 0", width: "100%" } },
            _react2.default.createElement(
              "header",
              { style: { background: "#fff", padding: "10px" } },
              todo.created_at ? _fecha2.default.format(Date.parse(todo.created_at), 'dddd MMMM DD, YYYY') : ''
            ),
            _react2.default.createElement(
              "article",
              { style: { background: "#F1F3F7", padding: "20px" } },
              _react2.default.createElement(
                "p",
                null,
                todo.content
              )
            )
          ),
          todo.subtodos && todo.subtodos.length > 0 ? todo.subtodos.map(function (subtodo, id) {
            return _react2.default.createElement(_subtodo2.default, { key: id, subtodo: subtodo });
          }) : ''
        ) : ''
      );
    }
  }]);

  return Tasks;
}(_react.Component);

var getTodoQuery = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(getTodoQuery, {
  options: function options(props) {
    return {
      variables: {
        id: props.todo.id
      }
    };
  },
  skip: function skip(props) {
    return !props.todo.hasOwnProperty('id');
  }
})(Tasks);

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

/**
 * Expose `pathtoRegexp`.
 */

module.exports = pathtoRegexp;

/**
 * Match matching groups in a regular expression.
 */
var MATCHING_GROUP_REGEXP = /\((?!\?)/g;

/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String|RegExp|Array} path
 * @param  {Array} keys
 * @param  {Object} options
 * @return {RegExp}
 * @api private
 */

function pathtoRegexp(path, keys, options) {
  options = options || {};
  keys = keys || [];
  var strict = options.strict;
  var end = options.end !== false;
  var flags = options.sensitive ? '' : 'i';
  var extraOffset = 0;
  var keysOffset = keys.length;
  var i = 0;
  var name = 0;
  var m;

  if (path instanceof RegExp) {
    while (m = MATCHING_GROUP_REGEXP.exec(path.source)) {
      keys.push({
        name: name++,
        optional: false,
        offset: m.index
      });
    }

    return path;
  }

  if (Array.isArray(path)) {
    // Map array parts into regexps and return their source. We also pass
    // the same keys and options instance into every generation to get
    // consistent matching groups before we join the sources together.
    path = path.map(function (value) {
      return pathtoRegexp(value, keys, options).source;
    });

    return new RegExp('(?:' + path.join('|') + ')', flags);
  }

  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))
    .replace(/\/\(/g, '/(?:')
    .replace(/([\/\.])/g, '\\$1')
    .replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function (match, slash, format, key, capture, star, optional, offset) {
      slash = slash || '';
      format = format || '';
      capture = capture || '([^\\/' + format + ']+?)';
      optional = optional || '';

      keys.push({
        name: key,
        optional: !!optional,
        offset: offset + extraOffset
      });

      var result = ''
        + (optional ? '' : slash)
        + '(?:'
        + format + (optional ? slash : '') + capture
        + (star ? '((?:[\\/' + format + '].+?)?)' : '')
        + ')'
        + optional;

      extraOffset += result.length - match.length;

      return result;
    })
    .replace(/\*/g, function (star, index) {
      var len = keys.length

      while (len-- > keysOffset && keys[len].offset > index) {
        keys[len].offset += 3; // Replacement length minus asterisk length.
      }

      return '(.*)';
    });

  // This is a workaround for handling unnamed matching groups.
  while (m = MATCHING_GROUP_REGEXP.exec(path)) {
    var escapeCount = 0;
    var index = m.index;

    while (path.charAt(--index) === '\\') {
      escapeCount++;
    }

    // It's possible to escape the bracket.
    if (escapeCount % 2 === 1) {
      continue;
    }

    if (keysOffset + i === keys.length || keys[keysOffset + i].offset > m.index) {
      keys.splice(keysOffset + i, 0, {
        name: name++, // Unnamed matching groups must be consistently linear.
        optional: false,
        offset: m.index
      });
    }

    i++;
  }

  // If the path is non-ending, match until the end or a slash.
  path += (end ? '$' : (path[path.length - 1] === '/' ? '' : '(?=\\/|$)'));

  return new RegExp(path, flags);
};


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(26);

var _reactDraftWysiwyg = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = function (_Component) {
	_inherits(TodoForm, _Component);

	function TodoForm() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TodoForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			title: "",
			content: ""
		}, _this.handleChange = function (field, e) {
			_this.setState(_defineProperty({}, field, e.target.value));
		}, _this.handleSubmit = function () {
			console.log(_this.state);
		}, _this.handleEditorChange = function (e) {}, _this.uploadImageCallBack = function (e) {
			return new Promise(function (resolve, reject) {
				return resolve({ data: { link: "https://avatars2.githubusercontent.com/u/1097809?v=3&s=40" } });
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TodoForm, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"form",
				{ action: "" },
				_react2.default.createElement("input", {
					placeholder: "Title",
					type: "text",
					className: "form-control",
					onChange: this.handleChange.bind(null, 'title')
				}),
				_react2.default.createElement(
					"div",
					{ style: { background: "#fff", margin: '20px 0', color: "#333" } },
					_react2.default.createElement(_reactDraftWysiwyg.Editor, {
						toolbarClassName: "task-toolbar",
						wrapperClassName: "task-wrapper-medium",
						editorClassName: "task-editor",
						toolbar: {
							options: ['inline', 'list', 'emoji', 'image', 'remove'],
							inline: {
								options: ['bold', 'italic']
							},
							image: { uploadCallback: this.uploadImageCallBack }
						}
					})
				),
				_react2.default.createElement(
					"button",
					{ className: "btn", onClick: this.handleSubmit },
					"Add"
				)
			);
		}
	}]);

	return TodoForm;
}(_react.Component);

exports.default = TodoForm;

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubTodo = function (_Component) {
  _inherits(SubTodo, _Component);

  function SubTodo() {
    _classCallCheck(this, SubTodo);

    return _possibleConstructorReturn(this, (SubTodo.__proto__ || Object.getPrototypeOf(SubTodo)).apply(this, arguments));
  }

  _createClass(SubTodo, [{
    key: "render",
    value: function render() {
      var subtodo = this.props.subtodo;


      return _react2.default.createElement(
        "section",
        { style: { color: "#333", margin: "20px 0" } },
        _react2.default.createElement(
          "header",
          { style: { background: "#fff", padding: "10px" } },
          subtodo.created_at ? fecha.format(Date.parse(subtodo.created_at), 'dddd MMMM DD, YYYY') : ''
        ),
        _react2.default.createElement(
          "article",
          { style: { background: "#F1F3F7", padding: "20px" } },
          _react2.default.createElement(
            "p",
            null,
            subtodo.content
          )
        )
      );
    }
  }]);

  return SubTodo;
}(_react.Component);

exports.default = SubTodo;

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
  'use strict';

  /**
   * Parse or format dates
   * @class fecha
   */
  var fecha = {};
  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm;
  var noop = function () {
  };

  function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };

  var formatFlags = {
    D: function(dateObj) {
      return dateObj.getDate();
    },
    DD: function(dateObj) {
      return pad(dateObj.getDate());
    },
    Do: function(dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate());
    },
    d: function(dateObj) {
      return dateObj.getDay();
    },
    dd: function(dateObj) {
      return pad(dateObj.getDay());
    },
    ddd: function(dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function(dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()];
    },
    M: function(dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function(dateObj) {
      return pad(dateObj.getMonth() + 1);
    },
    MMM: function(dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function(dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function(dateObj) {
      return String(dateObj.getFullYear()).substr(2);
    },
    YYYY: function(dateObj) {
      return dateObj.getFullYear();
    },
    h: function(dateObj) {
      return dateObj.getHours() % 12 || 12;
    },
    hh: function(dateObj) {
      return pad(dateObj.getHours() % 12 || 12);
    },
    H: function(dateObj) {
      return dateObj.getHours();
    },
    HH: function(dateObj) {
      return pad(dateObj.getHours());
    },
    m: function(dateObj) {
      return dateObj.getMinutes();
    },
    mm: function(dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function(dateObj) {
      return dateObj.getSeconds();
    },
    ss: function(dateObj) {
      return pad(dateObj.getSeconds());
    },
    S: function(dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function(dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function(dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    },
    a: function(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function(dateObj) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };

  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    YY: [twoDigits, function (d, v) {
      var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    d: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      var val = v.toLowerCase();
      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.dd = parseFlags.d;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.DD = parseFlags.D;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;


  // Some common format strings
  fecha.masks = {
    default: 'ddd MMM DD YYYY HH:mm:ss',
    shortDate: 'M/D/YY',
    mediumDate: 'MMM D, YYYY',
    longDate: 'MMMM D, YYYY',
    fullDate: 'dddd, MMMM D, YYYY',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };

  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */
  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];

    var literals = [];

    // Make literals inactive by replacing them with ??
    mask = mask.replace(literal, function($0, $1) {
      literals.push($1);
      return '??';
    });
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/\?\?/g, function() {
      return literals.shift();
    });
  };

  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */
  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format;

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        var index = dateStr.search(info[0]);
        if (!~index) {
          isValid = false;
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n);
            dateStr = dateStr.substr(index + result.length);
            return result;
          });
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
      return false;
    }

    var today = new Date();
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;
    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }
    return date;
  };

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return fecha;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    main.fecha = fecha;
  }
})(this);


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientsQuery = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  query getClients($clientName: JSON, $order: JSON) {\n    clients(where: {name: $clientName}, order: $order) {\n      id\n      name\n    }\n}\n"], ["\n  query getClients($clientName: JSON, $order: JSON) {\n    clients(where: {name: $clientName}, order: $order) {\n      id\n      name\n    }\n}\n"]);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(26);

var _section = __webpack_require__(231);

var _section2 = _interopRequireDefault(_section);

var _section3 = __webpack_require__(121);

var _section4 = _interopRequireDefault(_section3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this2 = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _initialiseProps.call(_this2);

    _this2.state = {
      client: {},
      project: {
        todos: []
      },
      todo: {},
      variables: {}
    };
    return _this2;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var _state = this.state,
          client = _state.client,
          project = _state.project;


      if (data.loading) {
        return _react2.default.createElement(
          "h1",
          { style: { margin: "40px 0", textAlign: "center", color: "#fff" } },
          "loading..."
        );
      } else {
        return _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-3", style: { padding: "20px 0 0 20px", background: "rgba(200,200,200,0.1)" } },
            _react2.default.createElement(_section2.default, {
              searchClients: this.searchClients,
              changeClient: this.changeClient,
              clients: data.clients,
              selected: client,
              companyId: this.props.companyId
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-lg-9" },
            _react2.default.createElement(_section4.default, {
              changeProject: this.changeProject,
              clientId: client.id,
              client: client,
              selected: project
            })
          )
        );
      }
    }
  }]);

  return Dashboard;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentWillReceiveProps = function (props) {
    if (!_this3.state.client.hasOwnProperty('name')) {
      _this3.setClient(props.data.clients);
    }
  };

  this.setClient = function (clients) {
    if (clients.length > 0) {
      var client = clients[0];
      _this3.setState({ client: client });
    }
  };

  this.changeClient = function (client) {
    _this3.setClient([client]);
  };

  this.changeProject = function (project) {
    _this3.setState({ project: project });
  };

  this.changeTodo = function (todo, e) {
    e.preventDefault();
    _this3.setState({ todo: todo });
  };

  this.searchClients = function (e) {
    var _this = _this3;
    var variables = _extends({}, _this3.state.variables, { clientName: { like: "%" + e.target.value + "%" } });
    _this3.setState({ variables: variables });
    _this3.props.data.fetchMore({ variables: variables,
      updateQuery: function updateQuery(previousResult, _ref) {
        var fetchMoreResult = _ref.fetchMoreResult,
            queryVariables = _ref.queryVariables;

        _this.setClient(fetchMoreResult.clients);
        return _extends({}, previousResult, { clients: fetchMoreResult.clients });
      }
    });
  };
};

var getClientsQuery = exports.getClientsQuery = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(getClientsQuery, {
  options: function options(props) {
    return {
      variables: {
        order: [["id", "DESC"]]
      }
    };
  }
})(Dashboard);

/***/ })

},[228]);