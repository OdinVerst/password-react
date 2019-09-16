import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import Password from '../src/components/password';

describe('Password', () => {
	it('change after clicking the Generate btn', done => {
		const fd = ReactDOM.findDOMNode;

		const password = TestUtils.renderIntoDocument(
			<Password
				uppercase={true}
				lowercase={true}
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

		const rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li');
		expect(rules.length).toBe(5);
		expect(rules.length).toEqual(5);
		expect(fd(rules[0].textContent)).toEqual(
			'Must have at least one upper-case character'
		);
		expect(fd(rules[0].textContent)).toBe(
			'Must have at least one upper-case character'
		);
		const generateBtn = TestUtils.findRenderedDOMComponentWithClass(
			password,
			'generate-btn'
		);
		expect(fd(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text');
		TestUtils.Simulate.click(fd(generateBtn));
		expect(fd(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike');
		done();
	});
});
