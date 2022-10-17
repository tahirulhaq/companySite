import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='d-flex flex-md-row justify-content-md-between flex-column '>
				<div className='d-flex p-2 flex-column flex-md-row align-items-center'>
					<div className='p-3'>
						<Link to='/'>
							<h1 className='text-green text-large'>Ecomvita</h1>
						</Link>
					</div>
					<div className='text-white'>
						<p> Lahore | Islamabad</p>
						<p>1-866-644-STEM</p>
						<p>info@stemcommerce.com</p>
					</div>
				</div>
				<div className='d-flex flex-column flex-md-column p-2 justify-content-md-center align-items-center'>
					<div className='p-2 text-white'>
						Connect with us on &nbsp;
						<a href='https://www.linkedin.com/company/ecomvita'>
							<i
								className='pl-2 text-medium fa fa-linkedin'
								aria-hidden='true'
							></i>
						</a>
					</div>
					<div className='d-flex flex-row-reverse'>
						<div className='p-2 text-nowrap'>
							<Link to='/contact'>Contact Us</Link>
						</div>
						<div className='p-2 text-nowrap'>
							<Link to='/about'>About Us</Link>
						</div>
						<div className='p-2'>
							<a href='https://www.upwork.com/ag/ecomvita'>Testimonials</a>
						</div>
					</div>
				</div>
			</div>
			<hr className='hr-color' />
			<p className='text-center text-white pt-4'>
				© 2022 Stem Commerce Inc. All Rights Reserved.
			</p>
		</div>
	)
}
