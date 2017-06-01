import page from 'page.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import {  ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import gql from 'graphql-tag';
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';
import Dashboard from './components/dashboard';
import store from './store';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4040/graphql',
  }),
});

function RootRender(component) {
  return render(
    <ApolloProvider client={client} store={store}>
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

page('/home', () => {
  RootRender(<Dashboard />);
});

page();