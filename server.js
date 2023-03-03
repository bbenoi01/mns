const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail');
const port = process.env.PORT || 8080;
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
	to: 'b.nutty@gmail.com', // Change to your recipient
	from: 'kristin@matchmakingnannyservices.com', // Change to your verified sender
	subject: 'Sending with SendGrid is Fun',
	text: 'and easy to do anywhere, even with Node.js',
	html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
	return res.send('ping');
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

sgMail
	.send(msg)
	.then(() => {
		console.log('Email sent');
	})
	.catch((error) => {
		console.error(error);
	});

app.listen(port);
