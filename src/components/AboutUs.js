import React from 'react'
import { AnnouncementBar } from './AnnouncementBar'
import { Footer } from './Footer'

import { AboutContainer } from './AboutContainer'
import { NewsLetter } from './NewsLetter'
export const AboutUs = () => {
	return (
		<>
			<AnnouncementBar />
			<AboutContainer />
			<NewsLetter
				title='Subscribe to our newsletter'
				subtitle='Promotions, new products and sales. Directly to your inbox.'
			/>
			<Footer />
		</>
	)
}
