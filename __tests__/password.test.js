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
	});
});
