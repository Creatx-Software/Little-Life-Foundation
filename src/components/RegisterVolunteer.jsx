const RegisterVolunteer = () => {
	return (
		<section className='contact section-space-top section-space-bottom volunteer-register'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-lg-10 col-xl-8'>
						<div className='contact__content'>
							<div
								className='section__content text-center'
								data-aos='fade-up'
								data-aos-duration={1000}
							>
								<h2 className='title-animation_inner'>Register as a Volunteer</h2>
								<p>Fill out the form below and our team will get in touch with you.</p>
							</div>

							<div
								className='contact__form cta'
								data-aos='fade-up'
								data-aos-duration={1000}
								data-aos-delay={100}
							>
								<form action='#' method='post'>
									<div className='input-single'>
										<label htmlFor='volunteerFullName'>Full Name *</label>
										<input
											type='text'
											name='full-name'
											id='volunteerFullName'
											placeholder='Enter your full name'
											required
										/>
									</div>

									<div className='input-single'>
										<label htmlFor='volunteerEmail'>Email Address *</label>
										<input
											type='email'
											name='email-address'
											id='volunteerEmail'
											placeholder='your@email.com'
											required
										/>
									</div>

									<div className='input-single'>
										<label htmlFor='volunteerPhone'>Phone Number *</label>
										<input
											type='tel'
											name='phone-number'
											id='volunteerPhone'
											placeholder='+94 XX XXX XXXX'
											required
										/>
									</div>

									<div className='input-single'>
										<label htmlFor='volunteerDistrict'>District / Area *</label>
										<input
											type='text'
											name='district-area'
											id='volunteerDistrict'
											placeholder='e.g., Colombo, Kandy'
											required
										/>
									</div>

									<div className='input-single'>
										<label htmlFor='volunteerInterests'>Interests / Skills</label>
										<input
											type='text'
											name='interests-skills'
											id='volunteerInterests'
											placeholder='e.g., Healthcare, Teaching, Event Planning'
										/>
									</div>

									<div className='input-single alter-input'>
										<label htmlFor='volunteerMessage'>Message (Optional)</label>
										<textarea
											name='message'
											id='volunteerMessage'
											placeholder='Tell us why you want to volunteer...'
											rows='5'
											defaultValue={""}
										/>
									</div>

									<div className='form-cta'>
										<button
											type='submit'
											aria-label='submit volunteer application'
											title='submit volunteer application'
											className='btn--primary'
										>
											Submit Application <i className='fa-solid fa-arrow-right' />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RegisterVolunteer;
