const form = document.getElementById('contactForm');
const firstNameInput = document.querySelector('#firstName');
const firstNameError = document.querySelector('#firstNameError');

const lastNameInput = document.querySelector('#lastName');
const lastNameError = document.querySelector('#lastNameError');

const emailInput = document.querySelector('#emailAddress');
const emailError = document.querySelector('#emailError');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const messageInput = document.querySelector('#message');
const messageError = document.querySelector('#messageError');

const queryTypeError = document.querySelector('#queryTypeError');
const consentInput = document.querySelector('#consent');
const consentError = document.querySelector('#consentError');
const successMessage = document.querySelector('#successMessage');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	let isValid = true;

	if (firstNameInput.value.trim() === '') {
		firstNameError.textContent = 'First name is required';
		isValid = false;
	} else {
		firstNameError.textContent = '';
	}

	if (lastNameInput.value.trim() === '') {
		lastNameError.textContent = 'Last name is required';
		isValid = false;
	} else {
		lastNameError.textContent = '';
	}

	if (emailInput.value.trim() === '') {
		emailError.textContent = 'Email is required';
		isValid = false;
	} else if (!emailPattern.test(emailInput.value.trim())) {
		emailError.textContent = 'Please enter a valid email address';
		isValid = false;
	} else {
		emailError.textContent = '';
	}

	if (messageInput.value.trim() === '') {
		messageError.textContent = 'Message is required';
		isValid = false;
	} else if (messageInput.value.trim().length < 10) {
		messageError.textContent = 'Message must be at least 10 characters long';
		isValid = false;
	} else {
		messageError.textContent = '';
	}

	const selectedQuery = document.querySelector(
		'input[name="queryType"]:checked'
	);

	if (!selectedQuery) {
		queryTypeError.textContent = 'Please select a query type';
		isValid = false;
	} else {
		queryTypeError.textContent = '';
	}

	if (!consentInput.checked) {
		consentError.textContent = 'You must consent to be contacted';
		isValid = false;
	} else {
		consentError.textContent = '';
	}

	if (isValid) {
		successMessage.textContent =
			'Thanks! Your message has been sent successfully.';
	} else {
		successMessage.textContent = '';
	}
});
