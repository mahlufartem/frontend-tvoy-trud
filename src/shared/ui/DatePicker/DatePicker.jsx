'use client'

import React, { useEffect, useRef, useState } from 'react'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'

import styles from './DatePicker.module.scss'

const MONTHS = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь'
]

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const formatDate = date => {
	if (!date) return ''
	return date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

const DatePicker = ({ value, onChange, label }) => {
	const wrapperRef = useRef(null)
	const [open, setOpen] = useState(false)

	const currentDate = value ? new Date(value) : new Date()
	const [month, setMonth] = useState(currentDate.getMonth())
	const [year, setYear] = useState(currentDate.getFullYear())

	useEffect(() => {
		const handleClickOutside = e => {
			if (!wrapperRef.current?.contains(e.target)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const daysInMonth = new Date(year, month + 1, 0).getDate()
	const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7

	const handleSelect = day => {
		const selected = new Date(year, month, day)
		onChange(selected.toISOString())
		setOpen(false)
	}

	const isSelected = day =>
		value &&
		new Date(value).getDate() === day &&
		new Date(value).getMonth() === month &&
		new Date(value).getFullYear() === year

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
				<span className={styles.value}>
					{value ? formatDate(new Date(value)) : 'Выберите дату'}
				</span>
				<span className={`${styles.arrow} ${open ? styles.open : ''}`}>
					<ArrowDownIcon />
				</span>
			</div>

			{open && (
				<div className={styles.calendar}>
					<div className={styles.header}>
						<button onClick={() => setMonth(m => (m === 0 ? 11 : m - 1))}>
							‹
						</button>

						<span>
							{MONTHS[month]} {year}
						</span>

						<button onClick={() => setMonth(m => (m === 11 ? 0 : m + 1))}>
							›
						</button>
					</div>

					<div className={styles.week}>
						{WEEK_DAYS.map(d => (
							<span key={d}>{d}</span>
						))}
					</div>

					<div className={styles.days}>
						{Array.from({ length: firstDayIndex }).map((_, i) => (
							<span key={`empty-${i}`} />
						))}

						{Array.from({ length: daysInMonth }).map((_, i) => {
							const day = i + 1
							return (
								<button
									key={day}
									onClick={() => handleSelect(day)}
									className={isSelected(day) ? styles.active : ''}
								>
									{day}
								</button>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}

export default DatePicker
