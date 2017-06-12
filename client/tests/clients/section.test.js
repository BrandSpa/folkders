import Clients from '../../src/components/clients/section';
import React from 'react';
import {  shallow, mount } from 'enzyme';

describe('Clients section', () => {
	it('should render list of clients', () => {
		let props = {
			data: {
				clients: [
					{id: 1, name: 'nea'}, 
					{id: 2, name: 'nea2'}
				]
			},
			loading: false,
			client: {}
		};

		const component = mount(<Clients {...props} />);
		expect(component.find('.client__item').length).toEqual(2);
	})
})