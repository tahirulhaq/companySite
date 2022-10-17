import React from 'react'
import { AboutCard } from './AboutCard'
import { AboutUsHeader } from './AboutUsHeader'
import { Navbar } from './Navbar'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'

export const AboutContainer = () => {
	return (
		<div className='about-container'>
			<Navbar />
			<AboutUsHeader title='About Us' />
			<AboutCard
				img={img1}
				title1='Born in 2013, Stem Commerce emerged to fill a gap in the digital market for high end design and web development.'
				title2='As the industry evolved, our team grew into a comprehensive agency that empowers serious entrepreneurs who want to grow their online businesses with the help of our agile development, proven expertise and trusted content. We are a tight-knit team that pride ourselves on fostering a stress-free, collaborative, fun, results-driven and impactful environment.'
			/>
			<AboutCard
				img={img2}
				reverse={true}
				title1='Born in 2013, Stem Commerce emerged to fill a gap in the digital market for high end design and web development.'
				title2='As the industry evolved, our team grew into a comprehensive agency that empowers serious entrepreneurs who want to grow their online businesses with the help of our agile development, proven expertise and trusted content. We are a tight-knit team that pride ourselves on fostering a stress-free, collaborative, fun, results-driven and impactful environment.'
			/>
			<AboutCard
				img={img3}
				title1='Born in 2013, Stem Commerce emerged to fill a gap in the digital market for high end design and web development.'
				title2='As the industry evolved, our team grew into a comprehensive agency that empowers serious entrepreneurs who want to grow their online businesses with the help of our agile development, proven expertise and trusted content. We are a tight-knit team that pride ourselves on fostering a stress-free, collaborative, fun, results-driven and impactful environment.'
			/>
		</div>
	)
}
