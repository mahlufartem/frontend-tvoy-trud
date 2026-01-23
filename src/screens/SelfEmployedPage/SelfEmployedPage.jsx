import React from 'react'

import DetailedDescriptionSection from '@/screens/SelfEmployedPage/sections/DetailedDescriptionSection/DetailedDescriptionSection'
import HowToGoSection from '@/screens/SelfEmployedPage/sections/HowToGoSection/HowToGoSection'
import NextStepsSection from '@/screens/SelfEmployedPage/sections/NextSteps/NextStepsSection'
import ShouldBeConsideredSection from '@/screens/SelfEmployedPage/sections/ShouldBeConsideredSection/ShouldBeConsideredSection'
import UniqueConditionsSection from '@/screens/SelfEmployedPage/sections/UniqueConditionsSection/UniqueConditionsSection'
import WhatNeedsSection from '@/screens/SelfEmployedPage/sections/WhatNeedsSection/WhatNeedsSection'
import WorkScheduleSection from '@/screens/SelfEmployedPage/sections/WorkScheduleSection/WorkScheduleSection'

import FeedbackForm from '@/components/FeedbackForm/FeedbackForm'
import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './SelfEmployedPage.module.scss'

const SelfEmployedPage = () => {
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
				<ShouldBeConsideredSection />
			</div>

			<NextStepsSection />

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

export default SelfEmployedPage
