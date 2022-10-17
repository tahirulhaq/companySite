import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Navbar = () => {
	const [show, setShow] = useState(false)
	const [lastScrollY, setLastScrollY] = useState(0)
	const blackNav = (
		<div className='nav-container text-white'>
			<div className='d-flex justify-content-between align-items-center '>
				<div className='d-flex flex-row'>
					<div className='p-2'>
						<Link to='/'>
							<h1>Ecomvita</h1>
						</Link>
					</div>
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
	)
	const whiteNav = (
		<div className='nav-container text-green bg-gray fixed-top'>
			<div className='d-flex justify-content-between align-items-center '>
				<div className='d-flex flex-row'>
					<div className='p-2'>
						<Link to='/'>
							<h1 className='text-green'>Ecomvita</h1>
						</Link>
					</div>
				</div>
				<div className='d-flex flex-row-reverse'>
					<div className='p-2 text-nowrap'>
						<Link className='text-green' to='/contact'>
							Contact Us
						</Link>
					</div>
					<div className='p-2 text-nowrap'>
						<Link className='text-green' to='/about'>
							About Us
						</Link>
					</div>
					<div className='p-2'>
						<a className='text-green' href='https://www.upwork.com/ag/ecomvita'>
							Testimonials
						</a>
					</div>
				</div>
			</div>
		</div>
	)

	useEffect(() => {
		const controlNavbar = () => {
			if (typeof window !== 'undefined') {
				if (window.scrollY > lastScrollY) {
					// if scroll down hide the navbar
					setShow(true)
				} else {
					// if scroll up show the navbar
					setShow(false)
				}

				// remember current page location to use in the next move
				setLastScrollY(window.scrollY)
			}
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar)

			// cleanup function
			return () => {
				window.removeEventListener('scroll', controlNavbar)
			}
		}
	}, [lastScrollY])
	return <div>{show ? whiteNav : blackNav}</div>
}
