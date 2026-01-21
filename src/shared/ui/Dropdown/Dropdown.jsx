'use client'

import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import styles from './Dropdown.module.scss'

const Dropdown = ({
	label,
	placeholder = 'Выберите значение',
	options = [],
	value,
	onChange,
	className
}) => {
	const [open, setOpen] = useState(false)
	const ref = useRef(null)

	const selectedOption = options.find(o => o.id === value)

	useEffect(() => {
		const handleClickOutside = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div
			ref={ref}
			className={clsx(styles.root, className)}
		>
			{label && <label className={styles.label}>{label}</label>}

			<button
				type='button'
				className={clsx(styles.control, open && styles.open)}
				onClick={() => setOpen(prev => !prev)}
			>
				<span
					className={clsx(styles.value, !selectedOption && styles.placeholder)}
				>
					{selectedOption ? selectedOption.label : placeholder}
				</span>

				<span className={styles.arrow} />
			</button>

			{open && (
				<ul className={styles.dropdown}>
					{options.map(option => (
						<li key={option.id}>
							<button
								type='button'
								className={clsx(
									styles.option,
									value === option.id && styles.active
								)}
								onClick={() => {
									onChange(option.id)
									setOpen(false)
								}}
							>
								{option.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Dropdown
