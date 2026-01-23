'use client'

import { useEffect, useState } from 'react'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'

import styles from './ScrollToTop.module.scss'

const SCROLL_OFFSET = 500

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > SCROLL_OFFSET)
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<button
			className={`${styles.root} ${visible ? styles.visible : ''}`}
			onClick={handleClick}
			aria-label='Наверх'
		>
			<ArrowRightIcon />
		</button>
	)
}
