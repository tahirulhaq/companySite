import React from 'react'
import { AnnouncementBar } from './AnnouncementBar'
import { NewsLetter } from './NewsLetter'
import { Footer } from './Footer'
import { ContactContainer } from './ContactContainer'
import { ContactHeader } from './ContactHeader'

export const ContactUs = () => {
	return (
		<>
			<AnnouncementBar />
			<ContactContainer />
			<ContactHeader />
			<NewsLetter
				title='Subscribe to our newsletter'
				subtitle='Promotions, new products and sales. Directly to your inbox.'
			/>
			<Footer />
		</>
	)
}
