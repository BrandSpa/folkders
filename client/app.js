import page from 'page.js';
import React from 'react';
import { render } from 'react-dom';
import Login from './components/login';

const root = document.querySelector('#app');

page('/', (ctx) => {
	console.log('nea');		
});

page('/login', () => {
	render(<Login />, root);
});

page();