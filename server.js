const express = require('express');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
	return res.send('ping');
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/email', async (req, res) => {
	const { to, messageData } = req?.body;
	let errors = {};

	try {
		const msg = {
			to: 'kristin@matchmakingnannyservices.com', // Change to your recipient
			from: 'support@matchmakingnannyservices.com', // Change to your verified sender
			subject: 'New Question From MNS',
			// text: messageData.message,
			html: `<strong>${messageData.messege}</strong>`,
		};

		const conformation = {
			to, // Change to your recipient
			from: 'support@matchmakingnannyservices.com', // Change to your verified sender
			subject: 'Thank You!',
			text: 'Thank you for your interest in our services. We have received you email, and will contact you within 48 hours.',
			// html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		};

		await sgMail.send(msg);
		await sgMail.send(conformation);

		res.json({ messege: 'Email sent successfully!' });
	} catch (err) {
		errors.email = 'Error sending email';
		return res.status(400).json(errors);
	}
});

app.listen(port);
