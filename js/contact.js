const contactForm = document.querySelector("#contactForm");
const submit = document.querySelector("#submit");

contactForm.innerHTML += `
<input class="form-control" name="lastName" id="lastName" placeholder="Last name" />
<div class="form-error" id="lastNameError">Please enter your last name</div>
<input class="form-control2" name="email" id="email" placeholder="Email" />
<div class="form-error2" id="emailError">Please enter your email address</div>
<input class="form-control3" name="subject" id="subject" placeholder="Subject" />
<div class="form-error3" id="subjectError">Please enter a subject</div>
<input class="form-control4" name="message" id="message" placeholder="Message" />
<div class="form-error4" id="messageError">Please enter your message</div>
`;

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
	event.preventDefault();

	if (checkLength(firstName.value, 0) === true) {
		firstNameError.style.display = "none";
	} else {
		firstNameError.style.display = "block";
	}

	if (checkLength(lastName.value, 0) === true) {
		lastNameError.style.display = "none";
	} else {
		lastNameError.style.display = "block";
	}

	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	if (checkLength(subject.value, 7) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	if (checkLength(message.value, 15) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
	console.log();
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}
