const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL_USER, // generated ethereal user
		pass: process.env.EMAIL_PASS // generated ethereal password
	},
	tls:{
		rejectUnauthorized:false
	}
});

const sendEmail = (req, res) => {
	const output = `
    <p>Nova mensagem do seu website</p>
    <h3>Informações do contacto</h3>
    <ul>
        <li>Nome: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Mensagem:</h3>
    <p>${req.body.question}</p>
    `;

	const mailOptions = {
		from: `"HMFinance Website" <${process.env.EMAIL_SENDER}>`, // sender address
		to: process.env.EMAIL_RECEIVER, // list of receivers
		subject: 'HMFinance - Client Message', // Subject line
		text: 'Hello world?', // plain text body
		html: output // html body
	};

	// send mail with defined transport object
	let info = transporter.sendMail(mailOptions, (err, response) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Message sent.', response);
		}
	});
    
	res.redirect('/');
};

module.exports = {
	sendEmail
};