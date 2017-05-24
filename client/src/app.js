import page from 'page.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';
import store from './store';

store.dispatch((dispatch) => {
  dispatch({type: 'USERS_TEST', payload: ['nea', 'nea1']});
});

function RootRender(component) {
  return render(
    <Provider store={store}>
      <Main>
          {component}
      </Main>
    </Provider>,
    document.getElementById('app')
  );
}

page('/', (ctx) => {
	RootRender(<Login/>);
});

page('/register', (ctx) => {
	RootRender(<Register />);
});

page('/login', () => {
	RootRender(<Login />);
});

page();