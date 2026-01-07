'use client'

import React, { useState } from 'react'

import clsx from 'clsx'

import styles from './Burger.module.scss'

const Burger = ({ onClick, isMobile }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(prev => !prev)
		onClick?.()
	}

	return (
		<div
			className={styles.root}
			onClick={handleClick}
		>
			<div className={clsx(styles.wrapper, isOpen && styles.open)}>
				{[0, 1, 2].map((line, idx) => (
					<span
						key={idx}
						className={styles.line}
					/>
				))}
			</div>
			<span className={styles.text}>Меню</span>
		</div>
	)
}

export default Burger
