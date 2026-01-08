import React from 'react'

const SearchIcon = ({ width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M25 25L19.2 19.2M22.3334 11.6667C22.3334 17.5577 17.5577 22.3333 11.6667 22.3333C5.77564 22.3333 1 17.5577 1 11.6667C1 5.77563 5.77564 1 11.6667 1C17.5577 1 22.3334 5.77563 22.3334 11.6667Z'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default SearchIcon
