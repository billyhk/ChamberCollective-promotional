import React from 'react';

const ContactForm = ({
	handleSubmit,
	/*
	handleChange,
	setName,
	setEmail,
	setChecked,
	*/
}) => {
	return (
		<form className='contact-form-form' onSubmit={handleSubmit}>
			<div className='contact-form-input-container'>
				<input
					id='name'
					name='name'
					type='text'
					placeholder='Name'
					required
					/*
					onChange={(e) => {
						setName(e.target.value);
						handleChange(e);
					}}
					*/
				/>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='Email'
					required
					/*
					onChange={(e) => {
						setEmail(e.target.value);
						handleChange(e);
					}}
					*/
				/>
			</div>
			{/*
			<div className='checkbox-container'>
				<label htmlFor='newsletter'>
					Check this box to opt-in for our latest news and events.
				</label>
				<input
					id='newsletter'
					type='checkbox'
					name='newsletter'
					
					onChange={(e) => {
						setChecked(e.target.checked);
						handleChange(e);
					}}
					
				/>
			</div>
				*/}
			<div className='button-container'>
				<input type='submit' className='submit-button' value='Learn More' />
			</div>
		</form>
	);
};

export default ContactForm;
