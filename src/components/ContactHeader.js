import React from 'react'

export const ContactHeader = () => {
	return (
		<div className='container mt-5 mb-3'>
			<div className='row'>
				<div className='col-12 col-md-5'>
					<form className='mt-5'>
						<div className='row'>
							<div className='pt-3 col-md-6 col-12'>
								<label for='name'>Name*</label>
								<input
									type='text'
									className='input-custom'
									id='name'
									required
								/>
							</div>
							<div className='pt-3 col-md-6 col-12'>
								<label for='inputEmail4'>Email*</label>
								<input
									type='email'
									className='input-custom'
									id='inputEmail4'
									name='email'
									required
								/>
							</div>
						</div>
						<div className='pt-3 col-12'>
							<label for='inputAddress'>Address</label>
							<input type='text' className='input-custom' id='inputAddress' />
						</div>
						<div className='pt-3 col-12'>
							<label for='inputAddress1'>Address 2</label>
							<input type='text' className='input-custom' id='inputAddress1' />
						</div>
						<div className='pt-3 row'>
							<div className='col-md-6 col-12'>
								<label for='inputCity'>City</label>
								<input type='text' className='input-custom' id='inputCity' />
							</div>
							<div className='col-md-6 col-12'>
								<label for='inputState'>State</label>
								<select id='inputState' className='input-custom'>
									<option selected>Choose...</option>
									<option>...</option>
								</select>
							</div>
						</div>
						<div className='d-flex justify-content-center'>
							<button className='mt-3 btn btn-primary btn-lg text-center '>
								Contact
							</button>
						</div>
					</form>
				</div>
				<div className='col-12 col-md-2'></div>
				<div className='mt-3 col-12 col-md-5 text-green bg-gray text-center'>
					<h1 className='pt-5'>Need an Answer Now?</h1>
					<p>
						You may just find the answer you are looking for in our Frequently
						Asked Questions
					</p>
					<div className='d-flex justify-content-center'>
						<button className='btn btn-primary btn-large text-center '>
							SEE OUR FAQs
						</button>
					</div>
					<br />
					<div className='text-center'>
						<h3>Location</h3>

						<hr />
						<p> Lahore | Islamabad</p>
						<p>1-866-644-STEM</p>
						<p>info@stemcommerce.com</p>
					</div>
				</div>
			</div>
		</div>
	)
}
