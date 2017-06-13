webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clientQueries = __webpack_require__(79);

var _section = __webpack_require__(245);

var _section2 = _interopRequireDefault(_section);

var _reactApollo = __webpack_require__(10);

var _reactRedux = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientsWithData = (0, _reactApollo.graphql)(_clientQueries.getClientsQuery, {
  options: function options(props) {
    return {
      variables: {
        order: [['id', 'DESC']]
      }
    };
  }
})(_section2.default);

var mapStateToProps = function mapStateToProps(state) {
  return {
    client: state.client
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ClientsWithData);

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projectQueries = __webpack_require__(251);

var _section = __webpack_require__(247);

var _section2 = _interopRequireDefault(_section);

var _reactApollo = __webpack_require__(10);

var _reactRedux = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectsWithData = (0, _reactApollo.graphql)(_projectQueries.getClientProjectsQuery, {
  options: function options(props) {
    return {
      variables: {
        clientId: props.client.selected.id,
        order: [["id", "DESC"]]
      }
    };
  },
  skip: function skip(props) {
    return !props.client.selected.hasOwnProperty('id') ? true : false;
  }
})(_section2.default);

var mapStateToProps = function mapStateToProps(state) {
  return {
    client: state.client,
    project: state.project
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(projectsWithData);

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactApollo = __webpack_require__(10);

var _reactRedux = __webpack_require__(52);

var _section = __webpack_require__(249);

var _section2 = _interopRequireDefault(_section);

var _todoQueries = __webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todosWithData = (0, _reactApollo.graphql)(_todoQueries.getTodoQuery, {
  options: function options(props) {
    return {
      variables: {
        id: props.project.todoId
      }
    };
  },
  skip: function skip(props) {
    return !props.project.todoId ? true : false;
  }
})(_section2.default);

var mapStateToProps = function mapStateToProps(state) {
  return {
    client: state.client,
    project: state.project,
    todo: state.todo
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(todosWithData);

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUsersQuery = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tquery getUsers{\n\t\tusers {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n'], ['\n\tquery getUsers{\n\t\tusers {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n']);

var _reactApollo = __webpack_require__(10);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getUsersQuery = exports.getUsersQuery = (0, _reactApollo.gql)(_templateObject);

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _clients = __webpack_require__(115);

var _clients2 = _interopRequireDefault(_clients);

var _projects = __webpack_require__(116);

var _projects2 = _interopRequireDefault(_projects);

var _todos = __webpack_require__(117);

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'row' },
        _react2.default.createElement(_clients2.default, null),
        _react2.default.createElement(_projects2.default, null),
        _react2.default.createElement(_todos2.default, null)
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(246);

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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(70);

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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(70);

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

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (apolloClient) {

	return (0, _redux.combineReducers)({
		client: _clientReducer2.default,
		project: _projectReducer2.default,
		todo: _todoReducer2.default,
		apollo: apolloClient.reducer()
	});
};

var _redux = __webpack_require__(27);

var _clientReducer = __webpack_require__(253);

var _clientReducer2 = _interopRequireDefault(_clientReducer);

var _projectReducer = __webpack_require__(254);

var _projectReducer2 = _interopRequireDefault(_projectReducer);

var _todoReducer = __webpack_require__(255);

var _todoReducer2 = _interopRequireDefault(_todoReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */

  

  /**
   * Module dependencies.
   */

  var pathtoRegexp = __webpack_require__(370);

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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(207);

var _page2 = _interopRequireDefault(_page);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactApollo = __webpack_require__(10);

var _graphqlTag = __webpack_require__(118);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _login = __webpack_require__(204);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(205);

var _register2 = _interopRequireDefault(_register);

var _main = __webpack_require__(203);

var _main2 = _interopRequireDefault(_main);

var _dashboard = __webpack_require__(202);

var _dashboard2 = _interopRequireDefault(_dashboard);

var _clients = __webpack_require__(115);

var _clients2 = _interopRequireDefault(_clients);

var _projects = __webpack_require__(116);

var _projects2 = _interopRequireDefault(_projects);

var _todos = __webpack_require__(117);

var _todos2 = _interopRequireDefault(_todos);

var _redux = __webpack_require__(27);

var _reducers = __webpack_require__(206);

var _reducers2 = _interopRequireDefault(_reducers);

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

var store = (0, _redux.createStore)((0, _reducers2.default)(client), {}, // initial state
(0, _redux.compose)((0, _redux.applyMiddleware)(client.middleware()),
// If you are using the devToolsExtension, you can add it here also
typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
  return f;
}));

function RootRender(component) {
  return (0, _reactDom.render)(_react2.default.createElement(
    _reactApollo.ApolloProvider,
    { client: client, store: store },
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

(0, _page2.default)('/clients', function (ctx) {
  RootRender(_react2.default.createElement(_clients2.default, null));
});

(0, _page2.default)('/projects', function (ctx) {
  RootRender(_react2.default.createElement(_projects2.default, null));
});

(0, _page2.default)('/todos', function (ctx) {
  RootRender(_react2.default.createElement(_todos2.default, null));
});

(0, _page2.default)('/login', function () {
  RootRender(_react2.default.createElement(_login2.default, null));
});

(0, _page2.default)('/home', function (ctx) {
  RootRender(_react2.default.createElement(_dashboard2.default, null));
});

(0, _page2.default)();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(10);

var _clientQueries = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClientForm = exports.ClientForm = function (_Component) {
  _inherits(ClientForm, _Component);

  function ClientForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClientForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClientForm.__proto__ || Object.getPrototypeOf(ClientForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      abbreviation: ''
    }, _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    }, _this.cleanState = function () {
      _this.setState({ name: '', abbreviation: '' });
    }, _this.updateClients = function (proxy, _ref2) {
      var data = _ref2.data;

      var variables = { order: [['id', 'DESC']] };
      var query = _clientQueries.getClientsQuery;
      var queryData = proxy.readQuery({
        query: query,
        variables: variables
      });

      var clients = [data.createClient].concat(queryData.clients);

      proxy.writeQuery({
        query: query,
        variables: variables,
        data: { clients: clients }
      });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log('create client');

      _this.props.createClient({
        variables: {
          name: _this.state.name
        },
        update: _this.updateClients
      }).then(_this.cleanState());
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClientForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit, className: 'form-inline' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'input-group col-lg-6' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'name',
              className: 'form-control',
              onChange: this.handleChange,
              value: this.state.name,
              placeholder: 'Name'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-group col-lg-6' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'abbreviation',
              className: 'form-control',
              onChange: this.handleChange,
              value: this.state.abbreviation,
              placeholder: 'Shortname'
            })
          )
        )
      );
    }
  }]);

  return ClientForm;
}(_react.Component);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_clientQueries.createClientMutation, { name: 'createClient' }), (0, _reactApollo.graphql)(_clientQueries.updateClientMutation, { name: 'updateClient' }))(ClientForm);

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = function (_Component) {
  _inherits(Client, _Component);

  function Client() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Client);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Client.__proto__ || Object.getPrototypeOf(Client)).call.apply(_ref, [this].concat(args))), _this), _this.selectClient = function (e) {
      e.preventDefault();
      _this.props.selectClient(_this.props.client);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Client, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          client = _props.client,
          selected = _props.selected;

      return _react2.default.createElement(
        'li',
        { className: 'clients__item ' + (client.id == selected.id ? 'clients__item--active' : '') },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.selectClient },
          client.name
        )
      );
    }
  }]);

  return Client;
}(_react.Component);

exports.default = Client;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SearchClients = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(10);

var _clientQueries = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchClients = exports.SearchClients = function (_Component) {
	_inherits(SearchClients, _Component);

	function SearchClients() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SearchClients);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchClients.__proto__ || Object.getPrototypeOf(SearchClients)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			name: ''
		}, _this.handleChange = function (e) {
			_this.setState(_defineProperty({}, e.target.name, e.target.value));
		}, _this.handleSubmit = function (e) {
			e.preventDefault();
			//send name to search
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SearchClients, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ onSubmit: this.handleSubmit },
				_react2.default.createElement(
					'div',
					{ className: 'input-group' },
					_react2.default.createElement('input', {
						type: 'text',
						name: 'name',
						className: 'form-control',
						placeholder: 'Search clients',
						onChange: this.handleChange,
						value: this.state.name
					})
				)
			);
		}
	}]);

	return SearchClients;
}(_react.Component);

exports.default = SearchClients;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(243);

var _item2 = _interopRequireDefault(_item);

var _form = __webpack_require__(242);

var _form2 = _interopRequireDefault(_form);

var _search = __webpack_require__(244);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clients = function (_Component) {
  _inherits(Clients, _Component);

  function Clients() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Clients);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Clients.__proto__ || Object.getPrototypeOf(Clients)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showForm: false,
      showSearch: false
    }, _this.selectClient = function (client) {
      _this.props.dispatch({ type: 'SELECT_CLIENT', payload: client });
    }, _this.toggleForm = function (e) {
      e.preventDefault();
      _this.setState({ showForm: !_this.state.showForm });
    }, _this.toggleSearch = function (e) {
      e.preventDefault();
      _this.setState({ showSearch: !_this.state.showSearch });
    }, _this.renderLoading = function () {
      return _react2.default.createElement(
        'section',
        { className: 'col-lg-3 clients' },
        _react2.default.createElement(
          'h5',
          null,
          'loading...'
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Clients, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (!props.client.selected.hasOwnProperty('id') && props.data.clients.length > 0) {
        this.selectClient(props.data.clients[0]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$data = this.props.data,
          _props$data$clients = _props$data.clients,
          clients = _props$data$clients === undefined ? [] : _props$data$clients,
          loading = _props$data.loading;
      var selected = this.props.client.selected;

      if (loading) return this.renderLoading();

      return _react2.default.createElement(
        'section',
        { className: 'col-lg-3 clients' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Clients'
          ),
          _react2.default.createElement(
            'div',
            { className: 'btns' },
            _react2.default.createElement(
              'button',
              { onClick: this.toggleForm, className: 'btn btn-link' },
              _react2.default.createElement('i', { className: 'ion-plus' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.toggleSearch, className: 'btn btn-link' },
              _react2.default.createElement('i', { className: 'ion-search' })
            )
          )
        ),
        this.state.showForm ? _react2.default.createElement(_form2.default, null) : _react2.default.createElement('div', null),
        this.state.showSearch ? _react2.default.createElement(_search2.default, null) : _react2.default.createElement('div', null),
        _react2.default.createElement(
          'ul',
          { className: 'clients--list' },
          clients.map(function (client) {
            return _react2.default.createElement(_item2.default, {
              key: client.id,
              client: client,
              selectClient: _this2.selectClient,
              selected: selected
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

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

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

			return _react2.default.createElement(
				'header',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ style: headerStyle },
					_react2.default.createElement('img', { src: '/logo.png', alt: '', width: '120px' })
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(480);

var _item2 = _interopRequireDefault(_item);

var _form = __webpack_require__(479);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_Component) {
  _inherits(Projects, _Component);

  function Projects() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Projects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Projects.__proto__ || Object.getPrototypeOf(Projects)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showForm: false
    }, _this.selectProject = function (project) {
      //select first todo on select project if has todos
      _this.props.dispatch({ type: 'SELECT_PROJECT', payload: project });
      _this.props.dispatch({ type: 'SELECT_PROJECT_TODO', payload: null });
    }, _this.changeTodo = function (todoId) {
      _this.props.dispatch({ type: 'SELECT_PROJECT_TODO', payload: todoId });
    }, _this.toggleForm = function (e) {
      if (e) e.preventDefault();
      _this.setState({ showForm: !_this.state.showForm });
    }, _this.handleProjectAdded = function () {
      _this.toggleForm();
    }, _this.renderLoading = function () {
      return _react2.default.createElement(
        "section",
        { className: "col-lg-3 projects" },
        _react2.default.createElement(
          "h5",
          null,
          "loading..."
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Projects, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (!props.project.selected.hasOwnProperty('id') && props.data.projects && props.data.projects.length > 0) {
        this.selectProject(props.data.projects[0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$data = _props.data,
          data = _props$data === undefined ? {} : _props$data,
          project = _props.project;
      var _data$projects = data.projects,
          projects = _data$projects === undefined ? [] : _data$projects;
      var selected = project.selected;

      if (data.loading) return this.renderLoading();

      return _react2.default.createElement(
        "section",
        { className: "col-lg-3 projects" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "h5",
            null,
            "Projects"
          ),
          _react2.default.createElement(
            "div",
            { className: "btns" },
            _react2.default.createElement(
              "button",
              { onClick: this.toggleForm, className: "btn btn-link" },
              _react2.default.createElement("i", { className: "ion-plus" })
            ),
            _react2.default.createElement(
              "button",
              { className: "btn btn-link" },
              _react2.default.createElement("i", { className: "ion-search" })
            )
          )
        ),
        this.state.showForm ? _react2.default.createElement(_form2.default, { client: this.props.client, onProjectAdded: this.handleProjectAdded }) : _react2.default.createElement("div", null),
        _react2.default.createElement(
          "ul",
          null,
          projects.map(function (project) {
            return _react2.default.createElement(_item2.default, {
              key: project.id,
              project: project,
              selected: selected,
              selectProject: _this2.selectProject,
              changeTodo: _this2.changeTodo
            });
          })
        )
      );
    }
  }]);

  return Projects;
}(_react.Component);

exports.default = Projects;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TodoForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(10);

var _userQueries = __webpack_require__(130);

var _todoQueries = __webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = exports.TodoForm = function (_Component) {
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
			content: "",
			assign_id: 0
		}, _this.handleChange = function (e) {
			_this.setState(_defineProperty({}, e.target.name, e.target.value));
		}, _this.updateTodos = function (proxy, _ref2) {
			var data = _ref2.data;

			//it should update project todos list
			// it should update todos views with this new todo
			;
		}, _this.handleSubmit = function (e) {
			e.preventDefault();
			var _this$state = _this.state,
			    title = _this$state.title,
			    content = _this$state.content,
			    assign_id = _this$state.assign_id;
			var _this$props = _this.props,
			    _this$props$todo = _this$props.todo,
			    todo = _this$props$todo === undefined ? {} : _this$props$todo,
			    _this$props$project = _this$props.project,
			    project = _this$props$project === undefined ? {} : _this$props$project;
			var selected = project.selected;


			_this.props.createTodo({
				variables: {
					project_id: selected.id,
					title: title,
					content: content,
					assign_id: assign_id
				}
			}).then(function (_ref3) {
				var data = _ref3.data;

				_this.props.selectTodo(data.createTodo);
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TodoForm, [{
		key: "render",
		value: function render() {
			var _props$getUsers = this.props.getUsers,
			    getUsers = _props$getUsers === undefined ? {} : _props$getUsers;
			var _getUsers$users = getUsers.users,
			    users = _getUsers$users === undefined ? [] : _getUsers$users,
			    loading = getUsers.loading;


			return _react2.default.createElement(
				"form",
				{ onSubmit: this.handleSubmit, className: "todos-form" },
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement("input", {
						placeholder: "Title",
						type: "text",
						name: "title",
						className: "form-control",
						onChange: this.handleChange,
						value: this.state.title
					})
				),
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"select",
						{
							name: "assign_id",
							className: "form-control",
							onChange: this.handleChange,
							value: this.state.assign_id
						},
						_react2.default.createElement(
							"option",
							{ value: "" },
							"Assign to"
						),
						users.map(function (user) {
							return _react2.default.createElement(
								"option",
								{ key: user.id, value: user.id },
								user.name
							);
						})
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement("textarea", {
						name: "content",
						className: "form-control",
						rows: "5",
						onChange: this.handleChange,
						value: this.state.content
					})
				),
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"button",
						{ className: "btn btn-secondary", onClick: this.handleSubmit },
						"Create & Assign"
					)
				)
			);
		}
	}]);

	return TodoForm;
}(_react.Component);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_userQueries.getUsersQuery, { name: 'getUsers' }), (0, _reactApollo.graphql)(_todoQueries.createTodoMutation, { name: 'createTodo' }))(TodoForm);

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _fecha = __webpack_require__(344);

var _fecha2 = _interopRequireDefault(_fecha);

var _form = __webpack_require__(248);

var _form2 = _interopRequireDefault(_form);

var _stepForm = __webpack_require__(250);

var _stepForm2 = _interopRequireDefault(_stepForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todos = function (_Component) {
  _inherits(Todos, _Component);

  function Todos() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Todos);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Todos.__proto__ || Object.getPrototypeOf(Todos)).call.apply(_ref, [this].concat(args))), _this), _this.selectTodo = function (todo) {
      _this.props.dispatch({ type: 'SELECT_PROJECT_TODO', payload: todo.id });
    }, _this.renderLoading = function () {
      return _react2.default.createElement(
        'section',
        { className: 'col-lg-6 todos' },
        _react2.default.createElement(
          'h5',
          null,
          'loading...'
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Todos, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$project = _props.project,
          project = _props$project === undefined ? { selected: {} } : _props$project,
          _props$data = _props.data,
          data = _props$data === undefined ? {} : _props$data;
      var _data$todo = data.todo,
          todo = _data$todo === undefined ? { steps: [] } : _data$todo;


      if (data.loading) return this.renderLoading();

      return _react2.default.createElement(
        'section',
        { className: 'col-lg-6 todos' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Task for ',
            project.selected.name
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          !todo.hasOwnProperty('id') ? _react2.default.createElement(_form2.default, { selectTodo: this.selectTodo, todo: todo, project: project }) : _react2.default.createElement('div', null)
        ),
        todo.hasOwnProperty('id') ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            todo.title
          ),
          _react2.default.createElement(
            'section',
            { className: 'todo__item' },
            _react2.default.createElement(
              'header',
              null,
              'Assigned: ',
              todo.assigned.name
            ),
            _react2.default.createElement(
              'div',
              { className: 'todo__item__content' },
              todo.content
            )
          )
        ) : _react2.default.createElement('div', null),
        todo.steps.map(function (subtodo, ind) {
          return _react2.default.createElement(
            'section',
            { key: ind, className: 'todo__item' },
            _react2.default.createElement(
              'header',
              null,
              'Step: ',
              ind + 1
            ),
            _react2.default.createElement(
              'article',
              null,
              subtodo.content
            )
          );
        }),
        todo.hasOwnProperty('id') ? _react2.default.createElement(_stepForm2.default, { todo: todo, project: project }) : _react2.default.createElement('div', null)
      );
    }
  }]);

  return Todos;
}(_react.Component);

exports.default = Todos;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StepForm = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(10);

var _userQueries = __webpack_require__(130);

var _todoQueries = __webpack_require__(80);

var _stepQueries = __webpack_require__(252);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepForm = exports.StepForm = function (_Component) {
	_inherits(StepForm, _Component);

	function StepForm() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, StepForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StepForm.__proto__ || Object.getPrototypeOf(StepForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			content: '',
			todo_id: ''
		}, _this.handleChange = function (e) {
			_this.setState(_defineProperty({}, e.target.name, e.target.value));
		}, _this.updateSteps = function (proxy, _ref2) {
			var data = _ref2.data;

			var query = _todoQueries.getTodoQuery;
			var variables = {
				id: _this.props.project.todoId
			};

			var queryData = proxy.readQuery({ query: query, variables: variables });

			var steps = [data.createStep].concat(queryData.todo.steps);

			proxy.writeQuery({ query: query, variables: variables, data: { todo: _extends({}, queryData.todo, { steps: steps }) } });
		}, _this.handleSubmit = function (e) {
			e.preventDefault();
			var content = _this.state.content;
			var _this$props$todo = _this.props.todo,
			    todo = _this$props$todo === undefined ? {} : _this$props$todo;


			_this.props.createStep({
				variables: {
					todo_id: todo.id,
					content: content
				},
				update: _this.updateSteps
			}).then(function (data) {
				return _this.setState({ content: '' });
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(StepForm, [{
		key: "render",
		value: function render() {
			var _props$getUsers = this.props.getUsers,
			    getUsers = _props$getUsers === undefined ? {} : _props$getUsers;
			var _getUsers$users = getUsers.users,
			    users = _getUsers$users === undefined ? [] : _getUsers$users,
			    loading = getUsers.loading;


			return _react2.default.createElement(
				"form",
				{ onSubmit: this.handleSubmit },
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement("textarea", {
						name: "content",
						className: "form-control",
						rows: "5",
						onChange: this.handleChange,
						value: this.state.content
					})
				),
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"button",
						{ className: "btn", onClick: this.handleSubmit },
						"Add"
					)
				)
			);
		}
	}]);

	return StepForm;
}(_react.Component);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_stepQueries.createStepMutation, { name: 'createStep' }))(StepForm);

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProjectMutation = exports.createProjectMutation = exports.getClientProjectsQuery = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  query getClientProjects($clientId: Int!, $name: JSON) {\n    projects(where: {client_id: $clientId, name: $name}) {\n      id\n      name,\n      todosCount,\n      todos {\n        id,\n        title\n      }\n    }\n}\n"], ["\n  query getClientProjects($clientId: Int!, $name: JSON) {\n    projects(where: {client_id: $clientId, name: $name}) {\n      id\n      name,\n      todosCount,\n      todos {\n        id,\n        title\n      }\n    }\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  mutation createProject($name: String!, $clientId:Int!) {\n    createProject(name: $name, client_id: $clientId) {\n      id\n      name\n      todosCount\n      todos {\n        id\n        title\n      }\n    }\n  }\n"], ["\n  mutation createProject($name: String!, $clientId:Int!) {\n    createProject(name: $name, client_id: $clientId) {\n      id\n      name\n      todosCount\n      todos {\n        id\n        title\n      }\n    }\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  mutation updateProject($projectId: Int!, $name:String!, $clientId:Int!) {\n    createProject(name: $name, client_id: $clientId) {\n      id\n      name\n    }\n  }\n"], ["\n  mutation updateProject($projectId: Int!, $name:String!, $clientId:Int!) {\n    createProject(name: $name, client_id: $clientId) {\n      id\n      name\n    }\n  }\n"]);

var _reactApollo = __webpack_require__(10);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getClientProjectsQuery = exports.getClientProjectsQuery = (0, _reactApollo.gql)(_templateObject);

var createProjectMutation = exports.createProjectMutation = (0, _reactApollo.gql)(_templateObject2);

var updateProjectMutation = exports.updateProjectMutation = (0, _reactApollo.gql)(_templateObject3);

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStepMutation = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tmutation createStep($content: String!, $todo_id: Int!) {\n  \tcreateStep(content: $content, todo_id: $todo_id) {\n    \tid\n    \tcontent\n\t\t\tcreated_at\n    \tauthor {\n      \tname\n    \t}\n  \t}\n\t}\n'], ['\n\tmutation createStep($content: String!, $todo_id: Int!) {\n  \tcreateStep(content: $content, todo_id: $todo_id) {\n    \tid\n    \tcontent\n\t\t\tcreated_at\n    \tauthor {\n      \tname\n    \t}\n  \t}\n\t}\n']);

var _reactApollo = __webpack_require__(10);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var createStepMutation = exports.createStepMutation = (0, _reactApollo.gql)(_templateObject);

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var type = "CLIENT";

var clientReducer = function clientReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { selected: {} };
	var action = arguments[1];

	switch (action.type) {
		case "SELECT_" + type:
			{
				state = _extends({}, state, { selected: action.payload });
				break;
			}
	}

	return state;
};

exports.default = clientReducer;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var type = "PROJECT";

var projectReducer = function projectReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { selected: {}, todoId: null };
	var action = arguments[1];

	switch (action.type) {
		case "SELECT_" + type:
			state = _extends({}, state, { selected: action.payload });
			break;
		case "CLEAN_" + type + "_SELECTED":
			state = _extends({}, state, { selected: {} });
			break;
		case "SELECT_" + type + "_TODO":
			state = _extends({}, state, { todoId: action.payload });
			break;
	}
	return state;
};

exports.default = projectReducer;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var type = "TODO";

var todoReducer = function todoReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case "SELECT_" + type:
			state = _extends({}, state, { selected: action.payload });
			break;
		case "CLEAN_" + type + "_SELECTED":
			state = _extends({}, state, { selected: {} });
			break;
	}

	return state;
};

exports.default = todoReducer;

/***/ }),

/***/ 344:
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

/***/ 370:
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

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(10);

var _projectQueries = __webpack_require__(251);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      name: ""
    }, _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    }, _this.updateProjects = function (proxy, _ref2) {
      var data = _ref2.data;

      var variables = {
        clientId: _this.props.client.selected.id,
        order: [["id", "DESC"]]
      };
      var query = _projectQueries.getClientProjectsQuery;
      var queryData = proxy.readQuery({ query: query, variables: variables });
      var projects = [data.createProject].concat(queryData.projects);

      proxy.writeQuery({ query: query, variables: variables, data: { projects: projects } });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var name = _this.state.name;


      _this.props.createProject({
        variables: {
          clientId: _this.props.client.selected.id,
          name: name
        },
        update: _this.updateProjects
      }).then(function (data) {
        _this.setState({ name: "" });
        _this.props.onProjectAdded();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProjectForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement("input", {
            type: "text",
            name: "name",
            className: "form-control",
            onChange: this.handleChange,
            value: this.state.name,
            placeholder: "Project Name"
          })
        )
      );
    }
  }]);

  return ProjectForm;
}(_react.Component);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_projectQueries.createProjectMutation, { name: 'createProject' }), (0, _reactApollo.graphql)(_projectQueries.updateProjectMutation, { name: 'updateProject' }))(ProjectForm);

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_Component) {
  _inherits(Project, _Component);

  function Project() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Project);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Project.__proto__ || Object.getPrototypeOf(Project)).call.apply(_ref, [this].concat(args))), _this), _this.selectProject = function (e) {
      e.preventDefault();
      _this.props.selectProject(_this.props.project);
    }, _this.changeTodo = function (todoId, e) {
      e.preventDefault();
      _this.props.changeTodo(todoId);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Project, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$project = _props.project,
          project = _props$project === undefined ? {} : _props$project,
          _props$selected = _props.selected,
          selected = _props$selected === undefined ? {} : _props$selected;


      return _react2.default.createElement(
        'li',
        { className: 'projects__item ' + (project.id == selected.id ? 'projects__item--active' : '') },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.selectProject },
          _react2.default.createElement(
            'span',
            { className: 'projects__item__name' },
            project.name
          ),
          _react2.default.createElement(
            'span',
            { className: 'projects__item__todos-count' },
            project.todosCount
          )
        ),
        project.todos.length > 0 ? _react2.default.createElement(
          'ul',
          null,
          project.todos.map(function (todo) {
            return _react2.default.createElement(
              'li',
              { key: todo.id },
              _react2.default.createElement(
                'a',
                { href: '#', onClick: _this2.changeTodo.bind(null, todo.id) },
                todo.title
              )
            );
          })
        ) : ''
      );
    }
  }]);

  return Project;
}(_react.Component);

exports.default = Project;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClientMutation = exports.createClientMutation = exports.getClientsQuery = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  query getClients($clientName: JSON, $order: JSON) {\n    clients(where: {name: $clientName}, order: $order) {\n      id\n      name\n    }\n}\n"], ["\n  query getClients($clientName: JSON, $order: JSON) {\n    clients(where: {name: $clientName}, order: $order) {\n      id\n      name\n    }\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  mutation createClient($name: String!, $abbreviation: String) {\n    createClient(name: $name, abbreviation: $abbreviation) {\n      id\n      name\n      abbreviation\n    }\n  }\n"], ["\n  mutation createClient($name: String!, $abbreviation: String) {\n    createClient(name: $name, abbreviation: $abbreviation) {\n      id\n      name\n      abbreviation\n    }\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  mutation updateClient($name: String!, $abbreviation: String, $id: Int!) {\n    updateClient(id: $id, name: $name) {\n      id\n      name\n      abbreviation\n    }\n  }\n"], ["\n  mutation updateClient($name: String!, $abbreviation: String, $id: Int!) {\n    updateClient(id: $id, name: $name) {\n      id\n      name\n      abbreviation\n    }\n  }\n"]);

var _reactApollo = __webpack_require__(10);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getClientsQuery = exports.getClientsQuery = (0, _reactApollo.gql)(_templateObject);

var createClientMutation = exports.createClientMutation = (0, _reactApollo.gql)(_templateObject2);

var updateClientMutation = exports.updateClientMutation = (0, _reactApollo.gql)(_templateObject3);

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createSubTodoMutation = exports.createTodoMutation = exports.getTodoQuery = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  query getTodo($id: Int!) {\n\t\ttodo(where: {id: $id}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcontent\n\t\t\tcreated_at\n\t\t\tauthor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tassigned {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tsteps(order: [["id", "desc"]]) {\n\t\t\t\tid\n\t\t\t\tcontent\n        created_at\n\t\t\t}\n\t\t}\n}\n'], ['\n  query getTodo($id: Int!) {\n\t\ttodo(where: {id: $id}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcontent\n\t\t\tcreated_at\n\t\t\tauthor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tassigned {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tsteps(order: [["id", "desc"]]) {\n\t\t\t\tid\n\t\t\t\tcontent\n        created_at\n\t\t\t}\n\t\t}\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tmutation createTodo($content: String!, $title: String, $project_id: Int!, $assign_id: Int) {\n\t\tcreateTodo(title: $title, content: $content, project_id: $project_id, assign_id: $assign_id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcontent\n\t\t\tcreated_at\n\t\t\tauthor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tassigned {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n'], ['\n\tmutation createTodo($content: String!, $title: String, $project_id: Int!, $assign_id: Int) {\n\t\tcreateTodo(title: $title, content: $content, project_id: $project_id, assign_id: $assign_id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcontent\n\t\t\tcreated_at\n\t\t\tauthor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tassigned {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tmutation createSubTodo($content: String!, $title: String, $project_id: Int!, $assign_id: Int, $todo_id: Int) {\n\t\tcreateTodo(title: $title, content: $content, project_id: $project_id, assign_id: $assign_id, todo_id: $todo_int) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcontent\n\t\t\tcreated_at\n\t\t\tauthor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tassigned {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n'], ['\n\tmutation createSubTodo($content: String!, $title: String, $project_id: Int!, $assign_id: Int, $todo_id: Int) {\n\t\tcreateTodo(title: $title, content: $content, project_id: $project_id, assign_id: $assign_id, todo_id: $todo_int) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcontent\n\t\t\tcreated_at\n\t\t\tauthor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tassigned {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n']);

var _reactApollo = __webpack_require__(10);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getTodoQuery = exports.getTodoQuery = (0, _reactApollo.gql)(_templateObject);

var createTodoMutation = exports.createTodoMutation = (0, _reactApollo.gql)(_templateObject2);

var createSubTodoMutation = exports.createSubTodoMutation = (0, _reactApollo.gql)(_templateObject3);

/***/ })

},[241]);