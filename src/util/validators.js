const isEmail = (email) => {
	const regEx =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email?.match(regEx)) return true;
	else return false;
};

const isPhone = (phone) => {
	const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	if (phone?.match(regEx)) return true;
	else return false;
};

const isEmpty = (string) => {
	if (string?.trim() === '') return true;
	else return false;
};

export const validateForm = (data) => {
	let errors = {};

	if (isEmpty(data.name)) errors.name = 'Required!';
	if (isEmpty(data.email)) {
		errors.email = 'Required!';
	} else if (!isEmail(data.email)) {
		errors.email = 'Enter a valid email address!';
	}
	if (isEmpty(data.phone)) {
		errors.phone = 'Required!';
	} else if (!isPhone(data.phone)) {
		errors.phone = 'Enter a valid phone number!';
	}
	if (isEmpty(data.message)) errors.message = 'Required!';

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false,
	};
};
