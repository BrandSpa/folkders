import page from 'page.js';
import React from 'react';
import { render } from 'react-dom';
import {  ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import gql from 'graphql-tag';
import Login from './components/users/login';
import Register from './components/users/register/basic';
import RegisterCompany from './components/users/register/company';
import Main from './components/main';
import Dashboard from './components/dashboard';
import Clients from './components/clients';
import Projects from './components/projects';
import Todos from './components/todos';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4040/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    } 
    
    const token = localStorage.getItem('token');

    if(token) {
      req.options.headers.authorization = token ? `JWT ${token}` : null;
      next();
    } else {
      page.redirect('/login');
    }
    
  }
}]);

const loggingAfterware = {
  applyAfterware(res, next) {
    if(res.response.status == 401) {
      page.redirect('/login');
    } 
    return next();
  }
};

networkInterface.useAfter([loggingAfterware]);

const client = new ApolloClient({
  networkInterface
});

const store = createStore(reducers(client),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

function RootRender(component) {
  return render(
    <ApolloProvider client={client} store={store}>
      <Main>
          {component ? component : <div/>}
      </Main>
    </ApolloProvider>,
    document.getElementById('app')
  );
}

page('/', (ctx) => {
	RootRender(<Login/>);
});

page('/register', (ctx) => {
	RootRender(<Register redirect={page.redirect} />);
});

page('/register/:userId/company', (ctx) => {
  RootRender(<RegisterCompany redirect={page.redirect} {...ctx.params} />);
});

page('/clients', (ctx) => {
	RootRender(<Clients />);
});

page('/projects', (ctx) => {
  RootRender(<Projects />);
});

page('/todos', (ctx) => {
  RootRender(<Todos />);
});

page('/login', () => {
	RootRender(<Login />);
});

page('/home', (ctx) => {
  RootRender(<Dashboard />);
});

page();