import React from 'react'

export const NewsLetter = ({ title, subtitle }) => {
	return (
		<div className='text-center pt-5'>
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<form type='submit'>
				<input
					type='text'
					className='input-style mb-5'
					placeholder='YOUR EMAIL ADDRESS'
					name='email'
				/>
				<button className='btn input-style btn-dark'>Submit</button>
			</form>
		</div>
	)
}
