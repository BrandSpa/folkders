import page from 'page.js';
import React from 'react';
import { render } from 'react-dom';
import {  ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import gql from 'graphql-tag';
import Login from './components/users/login';
import Register from './components/users/register';
import Main from './components/main';
import Dashboard from './components/dashboard';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4040/graphql',
  }),
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

page('/home/:id', (ctx) => {
  RootRender(<Dashboard companyId={ctx.params.id} />);
});

page();