'use client'

import { useRouter } from 'next/navigation'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'

import styles from './ReturnToBackButton.module.scss'

const ReturnToBackButton = () => {
	const router = useRouter()

	const handleBack = () => {
		if (window.history.length > 1) {
			router.back()
		} else {
			router.push('/')
		}
	}

	return (
		<button
			onClick={handleBack}
			className={styles.root}
		>
			<ArrowRightIcon /> Назад
		</button>
	)
}

export default ReturnToBackButton
