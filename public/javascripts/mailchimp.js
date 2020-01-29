const mailchimptoggle = () => {
	window.dojoRequire(['mojo/signup-forms/Loader'], function(L) { L.start({'baseUrl':'mc.us4.list-manage.com','uuid':'09457e9e38fbf1c62dd79d76b','lid':'9679ff8d78','uniqueMethods':true}); });
};

window.onload = () => {
	setTimeout(mailchimptoggle, 3000);
};

module.exports = mailchimptoggle;