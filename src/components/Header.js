import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ title }) => {
	return (
		<div className='text-white hero__inner'>
			<div className='text-center page-width'>
				<h1 className='mega-title'>{title}</h1>
				<div className='d-flex justify-content-center'>
					<Link to='/contact' className='hero__btn drk-btn'>
						LET'S CHAT
					</Link>
					<div className='mt-1 hero_expert_img'>
						<img
							className='desktop_logo'
							alt='desktop_logo'
							src='//cdn.shopify.com/s/files/1/2779/4838/files/white_176x.png?v=1617983774'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
