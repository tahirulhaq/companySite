import React from 'react'
import { AnnouncementBar } from './AnnouncementBar'
import { Container } from './Container'
import { Footer } from './Footer'
import { LearnMore } from './LearnMore'
import { NewsLetter } from './NewsLetter'
import { Quotes } from './Quotes'

export const Home = () => {
	return (
		<>
			<AnnouncementBar />
			<Container />
			<LearnMore />
			<Quotes />
			<NewsLetter
				title='Subscribe to our newsletter'
				subtitle='Promotions, new products and sales. Directly to your inbox.'
			/>
			<Footer />
		</>
	)
}
