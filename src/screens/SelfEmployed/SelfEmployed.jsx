import React from 'react'

import DetailedDescriptionSection from '@/screens/SelfEmployed/sections/DetailedDescriptionSection/DetailedDescriptionSection'
import HowToGoSection from '@/screens/SelfEmployed/sections/HowToGoSection/HowToGoSection'
import UniqueConditionsSection from '@/screens/SelfEmployed/sections/UniqueConditionsSection/UniqueConditionsSection'
import WhatNeedsSection from '@/screens/SelfEmployed/sections/WhatNeedsSection/WhatNeedsSection'
import WorkScheduleSection from '@/screens/SelfEmployed/sections/WorkScheduleSection/WorkScheduleSection'

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

			<div className={styles.container}>
				<WorkScheduleSection />
			</div>

			<WhatNeedsSection />

			<div className={styles.container}>
				<DetailedDescriptionSection />
			</div>

			<section className={styles.feedBackSection}>
				<div className={styles.container}>
					<FeedbackForm />
				</div>
			</section>
		</div>
	)
}

export default SelfEmployed
