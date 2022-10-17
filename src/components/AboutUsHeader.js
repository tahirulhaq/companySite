import React from 'react'

export const AboutUsHeader = ({ title }) => {
	return (
		<div className='text-white hero__inner'>
			<div className='text-center page-width'>
				<h1 className='mega-title'>{title}</h1>
				<div className='text-center'>
					<h3 className='page-width'>
						Stem Commerce is a Shopify agency, with the vision to transform the
						way people do business online. A leading expert and preferred
						partner, we’ve been at the top of our game since Shopify’s inception
						and continue to expand our capabilities to better serve our clients.
					</h3>
					<br />
					<h3 className='page-width'>
						We bring the right people together, building robust, responsive
						teams to design high- growth eCommerce stores. To us, every project
						is a partnership and we are committed to doing everything necessary
						to drive real results for your business in record-fast time.
					</h3>
				</div>
			</div>
		</div>
	)
}
