'use client'

import React from 'react'

import styles from './SearchRadius.module.scss'

const SearchRadius = ({ value, onChange, min = 1, max = 100, step = 1 }) => {
	const percentage = ((value - min) / (max - min)) * 100

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<span className={styles.title}>Радиус поиска</span>
				<span className={styles.value}>{value} км</span>
			</div>

			<input
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={e => onChange(Number(e.target.value))}
				className={styles.range}
				style={{
					background: `linear-gradient(
						to right,
						#0a5bff 0%,
						#0a5bff ${percentage}%,
						#dbeafe ${percentage}%,
						#dbeafe 100%
					)`
				}}
			/>

			<div className={styles.labels}>
				<span>{min}</span>
				<span>{max}</span>
			</div>
		</div>
	)
}

export default SearchRadius
