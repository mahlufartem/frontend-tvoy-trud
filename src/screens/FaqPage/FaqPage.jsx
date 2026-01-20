import React from 'react'

import { questions } from '@/screens/FaqPage/data'
import FaqSection from '@/screens/FaqPage/sections/FaqSection/FaqSection'

import FeedbackForm from '@/components/FeedbackForm/FeedbackForm'
import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './FaqPage.module.scss'

const FaqPage = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<ReturnToBackButton />
				<h4 className={styles.title}>Вопросы и ответы</h4>
			</div>
			<div className={styles.content}>
				<FaqSection questions={questions} />
			</div>
			<div className={styles.feedBack}>
				<FeedbackForm />
			</div>
		</div>
	)
}

export default FaqPage
