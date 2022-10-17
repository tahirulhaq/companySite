import React from 'react'
import { Header } from './Header'
import { Navbar } from './Navbar'

export const Container = () => {
	return (
		<div className='main-container'>
			<Navbar />
			<Header title='Your Expert Shopify Partner.' />
		</div>
	)
}
