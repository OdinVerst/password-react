import passwordGenerator from '../src/modules/password-generator';

const pattern = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,25}$/;

describe('method generatePassword', () => {
	let password;
	let password2;
	it('return password of set pattern', () => {
		password = passwordGenerator();
		expect(password).toMatch(pattern);
	});
	it('return different passwords', () => {
		password2 = passwordGenerator();
		expect(password2).toMatch(pattern);
		expect(password2).not.toEqual(password);
	});
});
