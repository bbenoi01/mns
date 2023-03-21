import { useEffect } from 'react';
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
	setErrors,
	clearSuccess,
	clearErrors,
} from '../../../../redux/slices/contactSlice';
import { validateForm } from '../../../../util/validators';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextInput from '../../../../components/textInput';
import TextArea from '../../../../components/textArea';
import Button from '../../../../components/button';
import './contact.scss';

const Contact = () => {
	const { loading, name, email, phone, message, success, errors } = useSelector(
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

	const handleFocus = () => {
		dispatch(clearErrors());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
		const { valid, errors } = validateForm(messageData);

		if (!valid) {
			dispatch(setErrors(errors));
		} else {
			dispatch(sendEmail(data));
		}
	};

	useEffect(() => {
		if (success) {
			setTimeout(() => {
				dispatch(clearSuccess());
			}, 5000);
		}
	}, [dispatch, success]);

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
				<Tooltip title='Instagram' placement='left-start'>
					<IconButton
						href='https://instagram.com/matchmakingnannyservices/'
						target='_blank'
						referrerPolicy='no-referrer'
					>
						<InstagramIcon className='social' />
					</IconButton>
				</Tooltip>
				<Tooltip title='LinkedIn'>
					<IconButton
						href='https://www.linkedin.com/in/kristin-rogers-97358b21a/'
						target='_blank'
						referrerPolicy='no-referrer'
					>
						<LinkedInIcon className='social' />
					</IconButton>
				</Tooltip>
				<Tooltip title='FaceBook' placement='right-start'>
					<IconButton
						href='https://www.facebook.com/profile.php?id=100090630715504'
						target='_blank'
						referrerPolicy='no-referrer'
					>
						<FacebookIcon className='social' />
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
									onFocus={handleFocus}
								/>
								{errors && errors.name && (
									<h5 className='helper-txt error'>{errors.name}</h5>
								)}
								<TextInput
									// type='email'
									placeholder='Email'
									value={email}
									onChange={(e) => handleChange('email', e.target.value)}
									onFocus={handleFocus}
								/>
								{errors && errors.email && (
									<h5 className='helper-txt error'>{errors.email}</h5>
								)}
								<TextInput
									type='tel'
									placeholder='Phone Number'
									value={phone}
									onChange={(e) => handleChange('phone', e.target.value)}
									onFocus={handleFocus}
								/>
								{errors && errors.phone && (
									<h5 className='helper-txt error'>{errors.phone}</h5>
								)}
								<TextArea
									placeholder='Message'
									value={message}
									onChange={(e) => handleChange('message', e.target.value)}
									onFocus={handleFocus}
								/>
								{success && (
									<h5 className='helper-txt success'>{success.message}</h5>
								)}
								{errors && errors.message && (
									<h5 className='helper-txt error'>{errors.message}</h5>
								)}
								<Button type='submit' label='Send Message' loading={loading} />
							</CardContent>
						</form>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};

export default Contact;
