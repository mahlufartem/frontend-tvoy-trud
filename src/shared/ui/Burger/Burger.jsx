'use client'

import React from 'react'

import clsx from 'clsx'

import { useMainMenuStore } from '@/store/mainMenuStore'

import styles from './Burger.module.scss'

const Burger = ({ onClick, text = 'Меню' }) => {
	const { isMenuOpen, toggleMenu } = useMainMenuStore()

	const handleClick = e => {
		e.stopPropagation()
		toggleMenu()
		onClick?.()
	}

	return (
		<div
			className={styles.root}
			onClick={e => handleClick(e)}
		>
			<div className={clsx(styles.wrapper, isMenuOpen && styles.open)}>
				{[0, 1, 2].map((line, idx) => (
					<span
						key={idx}
						className={styles.line}
					/>
				))}
			</div>
			<span className={styles.text}>{text}</span>
		</div>
	)
}

export default Burger
