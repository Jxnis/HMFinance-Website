const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	host: 'in-v3.mailjet.com',
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: '4c0eb978f0d40ae18319d51e0571b950', // generated ethereal user
		pass: '19c037ca9cc515f4df6eb165c99385fb' // generated ethereal password
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
		from: '"HMFinance Website" <tilda2123@gmail.com>', // sender address
		to: 'tilda_26@hotmail.com', // list of receivers
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