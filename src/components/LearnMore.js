import React from 'react'
import { Link } from 'react-router-dom'

export const LearnMore = () => {
	return (
		<div>
			<div className='hero__inner hero__inner--desktop'>
				<div className='page-width text-center'>
					<h1 class='mega-title'>Fast and Fail-Proof Execution.</h1>
					<div className='mega-subtitle '>
						<p>
							A digital agency with the expertise to help your Shopify store
							thrive from anywhere in the world.
						</p>
					</div>
					<Link to='/about' className='learn__btn'>
						LEARN MORE
					</Link>
				</div>

				<div class='animated-lines animation-lines-left line-animated'></div>
				<div class='animated-lines animation-lines-right line-animated'></div>
			</div>
		</div>
	)
}
