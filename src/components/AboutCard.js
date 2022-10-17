import React from 'react'

export const AboutCard = ({ img, reverse, title1, title2 }) => {
	return (
		<div className='page-width mb-5'>
			<div
				className={`${
					reverse ? 'flex-md-row-reverse' : 'flex-md-row'
				} page-width d-flex align-md-items-start align-items-center justify-content-center flex-column`}
			>
				<div>
					<img src={img} alt='ecomvita' className='image-sizing' />
				</div>
				<div className='flex-column p-5'>
					<h3 className='text-green pb-2'>{title1}</h3>
					<p className='text-white'>{title2}</p>
				</div>
			</div>
		</div>
	)
}
