'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charset: 'UTF-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }), _react2.default.createElement('title', null, 'Folkders'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' })), _react2.default.createElement('div', { className: 'container-fluid' }, _react2.default.createElement('div', { id: 'app' })), _react2.default.createElement('style', { jsx: true }, '\n      html, body {\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        min-height: 100%;\n      }\n      body {\n        background: #1F293B;\n         width: 100%;\n         margin: 0%;\n        color: #fff;\n        font-family: \'Roboto\', sans-serif;\n        font-size: 14px;\n      }\n\n      a:hover, a:focus {\n        text-decoration: none\n      }\n\n      p {\n        font-size: .8rem;\n      }\n\n      .form-control {\n        background: transparent;\n        border: none;\n        border-bottom: 1px solid rgba(255,255,255,.5);\n        border-radius: 0;\n        transition: all 300ms;\n        color: #fff;\n      }\n\n      .form-control:hover, .form-control:focus {\n        border-bottom: 1px solid rgba(255,255,255,1);\n      }\n\n      section::-webkit-scrollbar {\n        width: 6px;\n        height: 6px;\n      }\n\n      section::-webkit-scrollbar-thumb {\n        background: rgba(0, 0, 0, 0.07);\n        border-radius: 1em;\n        cursor: grab;\n      }\n\n      section::-webkit-scrollbar-track {\n        background: rgba(0, 0, 0, 0.05);\n      }\n\n      .form-control:hover, .form-control:focus {\n        background: transparent;\n        color: #fff;\n      }\n\n      .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        color: #fff;\n      }\n\n      .form-control::-moz-placeholder { /* Firefox 19+ */\n        color: #fff;\n      }\n\n      .form-control:-ms-input-placeholder { /* IE 10+ */\n        color: #fff;\n      }\n\n      .form-control:-moz-placeholder { /* Firefox 18- */\n        color: #fff;\n      }\n\n      .task-editor {\n        min-height: 100px;\n        padding: 0 20px;\n      }\n\n      button {\n        cursor: pointer\n      }\n      ul {\n        padding: 0\n      }\n\n      li {\n        list-style: none\n      }\n\n      .clients {\n        background: rgba(255, 255, 255, 0.01);\n        padding: 20px 0;\n        height: 91vh\n      }\n\n      .clients > header {\n        padding: 0 10px;\n      }\n\n      .clients > header h5 {\n        display: inline-block;\n      }\n\n      .clients > header .btns {\n        display: inline-block;\n      }\n\n      .clients__item a {\n        display: block;\n        padding: 10px;\n      }\n\n      .clients__item--active a {\n        color: #fff;\n        background: rgba(0, 0, 0, 0.05);\n      }\n\n      .projects {\n        background: rgba(0, 0, 0, 0.1);\n        padding: 20px 0;\n        height: 91vh\n      }\n\n      .projects > header {\n        padding: 0 10px;\n      }\n\n      .projects > header h5 {\n        display: inline-block;\n      }\n\n      .projects > header .btns {\n        display: inline-block;\n      }\n\n      .projects__item a {\n        display: block;\n        padding: 10px;\n      }\n\n      .projects__item__todos-count {\n        float: right\n      }\n\n      .projects__item ul {\n        visibility: hidden;\n        height: 0;\n        overflow-y: auto;\n        overflow-x: none;\n        max-height: 400px;\n        padding: 0;\n        transition: all 300ms;\n      }\n\n      .projects__item--active a {\n        color: #fff;\n        background: rgba(0, 0, 0, 0.07);\n      }\n\n      .projects__item--active ul {\n        visibility:visible;\n        height: auto;\n        background: rgba(0, 0, 0, 0.07);\n        padding-left: 40px;\n        padding-bottom: 20px;\n        transition: all 300ms;\n      }\n\n      .todos {\n        padding: 20px;\n        background: rgba(0, 0, 0, 0.2);\n        height: 91vh\n      }\n\n      .todos-form {\n        background: rgba(255, 255, 255, .9);\n        padding: 20px;\n      }\n\n      .todos-form .form-control {\n        border-color: #1F293B;\n        color: #1F293B\n      }\n\n      .todos-form  .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        color: #1F293B;\n      }\n\n      .todos-form .form-control::-moz-placeholder { /* Firefox 19+ */\n        color: #1F293B;\n      }\n\n      .todos-form .form-control:-ms-input-placeholder { /* IE 10+ */\n        color: #1F293B;\n      }\n\n      .todos-form .form-control:-moz-placeholder { /* Firefox 18- */\n        color: #1F293B;\n      }\n\n      .todos-items {\n        overflow-y: auto;\n        overflow-x: hidden;\n        max-height: 400px;\n      }\n\n      .todo__item {\n        background: rgba(255, 255, 255, .9);\n        color: #333;\n        margin: 20px 0;\n      }\n\n      .todo__item header {\n        background: #fff;\n        padding: 20px;\n      }\n\n      .todo__item__content {\n        padding: 20px;\n      }\n\n      ::-webkit-scrollbar {\n      width: 12px;\n  }\n\n  ::-webkit-scrollbar-track {\n      background: transparent;\n      border-radius: 0;\n  }\n\n  ::-webkit-scrollbar-thumb {\n      border-radius: 0;\n      background: rgba(0,0,0,0.3);\n  }\n\n    '));
};