import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Card,
	CardContent,
	CardHeader,
	Grid,
	IconButton,
	Tooltip,
} from '@mui/material';
import {
	setName,
	setEmail,
	setPhone,
	setMessage,
	sendEmail,
} from '../../../../redux/slices/contactSlice';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextInput from '../../../../components/textInput';
import TextArea from '../../../../components/textArea';
import Button from '../../../../components/button';
import './contact.scss';

const Contact = () => {
	const { name, email, phone, message, success, errors } = useSelector(
		(state) => state.contact
	);
	const dispatch = useDispatch();

	const handleChange = (input, value) => {
		switch (input) {
			case 'name':
				dispatch(setName(value));
				break;

			case 'email':
				dispatch(setEmail(value));
				break;

			case 'phone':
				dispatch(setPhone(value));
				break;

			case 'message':
				dispatch(setMessage(value));
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		const messageData = {
			name,
			email,
			phone,
			message,
		};

		const data = {
			to: email,
			messageData,
		};
		e.preventDefault();
		dispatch(sendEmail(data));
	};

	return (
		<section id='contact'>
			<h4 className='headline section-header'>Get In Touch</h4>
			<div className='divider' />
			<h3 className='headline questions'>Do you have questions?</h3>
			<p className='sub-headline concerns'>
				I am always happy to give you more information about our services, or
				address any concerns!
			</p>

			<div className='row contact-row'>
				<EmailIcon className='icon' />
				<Link
					className='link email-link sub-headline'
					to='mailto:kristin@matchmakingnannyservices.com'
				>
					kristen@matchmakingnannyservices.com
				</Link>
			</div>
			<div className='row contact-row'>
				<CallIcon className='icon' />
				<h4 className='sub-headline'>619-540-9227</h4>
			</div>
			<div className='row icon-row'>
				<Tooltip title='Instagram' placement='right-start'>
					<IconButton>
						<InstagramIcon className='social' />
					</IconButton>
				</Tooltip>
			</div>
			<Grid container spacing={5} justifyContent='center' alignItems='flex-end'>
				<Grid item xs={12} sm={8} md={6}>
					<Card className='card contact-card'>
						<CardHeader
							title='Drop Us Line'
							titleTypographyProps={{
								align: 'center',
								color: '#fffffe',
								fontFamily: 'Josefin Slab serif',
							}}
							subheader="Please give us a call, send us an email, or fill out the contact form and we'll get back to you."
							subheaderTypographyProps={{
								align: 'center',
								color: 'silver',
								fontFamily: 'Questrial sans-serif',
								fontSize: '14px',
							}}
							sx={{ backgroundColor: '#001858' }}
						/>
						<form onSubmit={handleSubmit}>
							<CardContent>
								<TextInput
									type='text'
									placeholder='Full Name'
									value={name}
									onChange={(e) => handleChange('name', e.target.value)}
								/>
								<TextInput
									type='email'
									placeholder='Email'
									value={email}
									onChange={(e) => handleChange('email', e.target.value)}
								/>
								<TextInput
									type='tel'
									placeholder='Phone Number'
									value={phone}
									onChange={(e) => handleChange('phone', e.target.value)}
								/>
								<TextArea
									placeholder='Message'
									value={message}
									onChange={(e) => handleChange('message', e.target.value)}
								/>
								{success && (
									<h5 className='helper-txt success'>{success.message}</h5>
								)}
								{errors && errors.email && (
									<h5 className='helper-txt error'>{errors.email}</h5>
								)}
								<Button type='submit' label='Send Message' />
							</CardContent>
						</form>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};

export default Contact;
