import React from 'react'

import FaqAccordion from '@/shared/ui/FaqAccordion/FaqAccordion'

import styles from './AnswerQuestionSection.module.scss'
import { questions } from './data'

const AnswerQuestionSection = () => {
	return (
		<div className={styles.root}>
			<FaqAccordion
				items={questions}
				title='Вопросы и ответы'
				listStyles={{ maxWidth: '100%' }}
			/>
		</div>
	)
}

export default AnswerQuestionSection
