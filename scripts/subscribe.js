let namevalid = false;
let emailvalid = false;
let phonevalid = false;
let messagevalid = false;
const validateName = () => {
	document.getElementById("namewarning").style.display = "none";
	const name = document.getElementById("name").value;
	const namearray = name.split("");
	let nonletters = 0;
	for (const letters of namearray) {
		if (!isNaN(letters)) nonletters++;
	}
	if (nonletters > 0) {
		document.getElementById("namewarning").style.display = "block";
		return (namevalid = false);
	}
	document.getElementById("namewarning").style.display = "none";
	return (namevalid = true);
};
const validateEmail = () => {
	document.getElementById("emailwarning").style.display = "none";
	const email = document.getElementById("email").value;
	const emailarray = email.split("@");
	if (emailarray.length != 2) {
		document.getElementById("emailwarning").style.display = "block";
		return (emailvalid = false);
	}
	const emailarray2 = emailarray[1].split(".");
	if (emailarray2.length != 2) {
		document.getElementById("emailwarning").style.display = "block";
		return (emailvalid = false);
	}
	document.getElementById("emailwarning").style.display = "none";
	return (emailvalid = true);
};
const validatePhone = () => {
	document.getElementById("phonewarning").style.display = "none";
	const phone = document.getElementById("phone").value;
	const phonearray = phone.split("");
	let nonnumbers = 0;
	for (const numbers of phonearray) {
		if (isNaN(numbers)) nonnumbers++;
	}
	if (nonnumbers > 0) {
		document.getElementById("phonewarning").style.display = "block";
		return (phonevalid = false);
	}
	document.getElementById("phonewarning").style.display = "none";
	return (phonevalid = true);
};
const validateMessage = () => {
	document.getElementById("messagewarning").style.display = "none";
	const message = document.getElementById("message");
	console.log(message.value);
	if (message.value === "") {
		document.getElementById("messagewarning").style.display = "block";
		return (messagevalid = false);
	}
	document.getElementById("messagewarning").style.display = "none";
	return (messagevalid = true);
};

const submit = () => {
	console.log(namevalid, emailvalid, phonevalid, messagevalid);
	if (namevalid && emailvalid && phonevalid && messagevalid) {
		alert("Submitted");
	} else {
		alert("Please fill out all fields");
	}
};
