import React from 'react'

import HowToGoSection from '@/screens/SelfEmployed/sections/HowToGoSection/HowToGoSection'
import UniqueConditionsSection from '@/screens/SelfEmployed/sections/UniqueConditionsSection/UniqueConditionsSection'

import FeedbackForm from '@/components/FeedbackForm/FeedbackForm'
import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './SelfEmployed.module.scss'

const SelfEmployed = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<ReturnToBackButton />
				<h2>Памятка для самозанятых от «ПОЧТА ЕКОМ»</h2>
				<p>
					Самарская область, Волжский район, сельское поселение Верхняя
					Подстепновка,
					<br />
					село Преображенка, Индустриальная улица, 7
				</p>
			</div>

			<div className={styles.container}>
				<UniqueConditionsSection />
			</div>

			<HowToGoSection />

			<section className={styles.feedBackSection}>
				<div className={styles.container}>
					<FeedbackForm />
				</div>
			</section>
		</div>
	)
}

export default SelfEmployed
