import page from 'page.js';
import React from 'react';
import { render } from 'react-dom';
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';
import request from 'axios';
import { Provider, connect } from 'react-redux';
import store from './store';



function RootRender(component) {
  return render(
    <Main>
      <Provider store={store}>
        {component}
      </Provider>
    </Main>,
    document.getElementById("app")
  );
}

page('/', (ctx) => {
	RootRender();
});

page('/register', (ctx) => {
	RootRender(<Register />);
});

page('/login', () => {
	RootRender(<Login />);
});

page('*', () => {
	console.log('not found');
});

page();