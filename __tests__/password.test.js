import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createRenderer } from 'react-test-renderer/shallow';
import Password from '../src/components/password';

Enzyme.configure({ adapter: new Adapter() });

describe('Password', () => {
	it('change after clicking the Generate btn', done => {
		const password = mount(
			<Password
				upperCase={true}
				lowerCase={true}
				special={true}
				number={true}
				over6={true}
			/>
		);

		const passwordRenderer = createRenderer();
		passwordRenderer.render(<Password />);
		const p = passwordRenderer.getRenderOutput();
		expect(p.type).toBe('div');
		expect(p.props.children.length).toBe(6);

		expect(password.find('li').length).toBe(5);
		expect(password.find('li').at(0)).toIncludeText(
			'Must have at least one upper-case character'
		);
		password.find('.generate-btn').simulate('click');

		expect(password.find('li').at(0)).toHaveHTML(
			'<li><s>Must have at least one upper-case character</s></li>'
		);
		done();
	});
});
