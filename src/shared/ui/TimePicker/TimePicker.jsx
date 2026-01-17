'use client'

import React, { useEffect, useRef, useState } from 'react'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'

import styles from './TimePicker.module.scss'

const generateTimeList = (step = 15) => {
	const times = []
	for (let h = 0; h < 24; h++) {
		for (let m = 0; m < 60; m += step) {
			times.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
		}
	}
	return times
}

const TimePicker = ({ value, onChange, label, step = 15 }) => {
	const wrapperRef = useRef(null)
	const [open, setOpen] = useState(false)
	const times = generateTimeList(step)

	useEffect(() => {
		const handleClickOutside = e => {
			if (!wrapperRef.current?.contains(e.target)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div
			className={styles.root}
			ref={wrapperRef}
		>
			{label && <div className={styles.label}>{label}</div>}

			<div
				className={styles.field}
				onClick={() => setOpen(v => !v)}
			>
				<span className={styles.value}>{value || '--:--'}</span>
				<span className={`${styles.arrow} ${open ? styles.open : ''}`}>
					<ArrowDownIcon />
				</span>
			</div>

			{open && (
				<div className={styles.dropdown}>
					{times.map(time => (
						<button
							key={time}
							className={time === value ? styles.active : ''}
							onClick={() => {
								onChange(time)
								setOpen(false)
							}}
						>
							{time}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default TimePicker
