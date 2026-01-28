import React from 'react'

import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './InstructionPage.module.scss'

const InstructionPage = () => {
	return (
		<main className={styles.root}>
			<div className={styles.header}>
				<ReturnToBackButton />
				<h4 className={styles.title}>Инструкция</h4>
			</div>
		</main>
	)
}

export default InstructionPage
