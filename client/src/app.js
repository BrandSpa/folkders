import page from 'page.js';
import React from 'react';
import { render } from 'react-dom';
import {  ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import gql from 'graphql-tag';
import Login from './components/users/login';
import Register from './components/users/register';
import Main from './components/main';
import Dashboard from './components/dashboard';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4040/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    } 
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    if(token) {
      req.options.headers.authorization = token ? `JWT ${token}` : null;
      next();
    } else {
      page.redirect('/login');
    }
    
  }
}]);

const client = new ApolloClient({
  networkInterface
});

function RootRender(component) {
  return render(
    <ApolloProvider client={client}>
      <Main>
          {component}
      </Main>
    </ApolloProvider>,
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

page('/home', (ctx) => {
  RootRender(<Dashboard />);
});

page();