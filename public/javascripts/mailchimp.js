const mailchimptoggle = () => {
	window.dojoRequire(['mojo/signup-forms/Loader'], function(L) { L.start({'baseUrl':'mc.us4.list-manage.com','uuid':'a2cd98f4b831f77f9347d1f05','lid':'4ae54d252d','uniqueMethods':true}); });
};

window.onload = () => {
	setTimeout(mailchimptoggle, 2000);
};

module.exports = mailchimptoggle;