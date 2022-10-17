import React from 'react'

export const AnnouncementBar = () => {
	return (
		<div class='announcement-bar' role='region' aria-label='Announcement'>
			<a
				href='https://calendly.com/hammadcodes'
				target='_blank'
				class='announcement-bar__link'
				aria-describedby='a11y-new-window-external-message'
				rel='noreferrer'
			>
				<p class='announcement-bar__message' style={{ marginBottom: '0' }}>
					Book a consultation with our team today!
				</p>
			</a>
		</div>
	)
}
