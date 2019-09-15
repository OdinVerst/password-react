const SPECIAL = '!@#$%^&*()_+{}:"<>?|[],./`';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const ALL = `${SPECIAL}${LOWERCASE}${UPPERCASE}${NUMBERS}`;

const getIterable = length => Array.from({ length }, (_, index) => index + 1);

const pick = (set, min, max) => {
	let length = min;
	if (typeof max !== 'undefined') {
		length += Math.floor(Math.random() * (max - min));
	}
	return getIterable(length).map(() =>
		set.charAt(Math.floor(Math.random() * set.length))
	);
};

const shuffle = set => {
	const array = set.split('');
	const { length } = array;
	const iterable = getIterable(length).reverse();
	const shuffled = iterable.reduce(
		(acc, val) => {
			const randomIndex = Math.floor(Math.random() * val);
			[acc[val - 1], acc[randomIndex]] = [acc[randomIndex], acc[val - 1]];
			return acc;
		},
		[...array]
	);
	return shuffled.join('');
};

const passwordGenerator = () => {
	const password =
		pick(SPECIAL, 1) +
		pick(LOWERCASE, 1) +
		pick(NUMBERS, 1) +
		pick(UPPERCASE, 1) +
		pick(ALL, 4, 12);

	return shuffle(password);
};

export default passwordGenerator;
