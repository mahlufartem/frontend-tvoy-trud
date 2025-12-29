'use client'

import React, { useState } from 'react'

import clsx from 'clsx'

import styles from './Burger.module.scss'

const Burger = ({ onClick }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(prev => !prev)
		onClick?.()
	}

	return (
		<div
			className={clsx(styles.root, isOpen && styles.open)}
			onClick={handleClick}
		>
			{[0, 1, 2].map((line, idx) => (
				<span
					key={idx}
					className={styles.line}
				/>
			))}
		</div>
	)
}

export default Burger
