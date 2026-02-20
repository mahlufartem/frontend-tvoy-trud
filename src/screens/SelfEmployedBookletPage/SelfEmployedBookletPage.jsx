import React from 'react'

import DetailedDescriptionSection from '@/screens/SelfEmployedBookletPage/sections/DetailedDescriptionSection/DetailedDescriptionSection'
import HowToGoSection from '@/screens/SelfEmployedBookletPage/sections/HowToGoSection/HowToGoSection'
import ImportantToKnowSection from '@/screens/SelfEmployedBookletPage/sections/ImportantToKnowSection/ImportantToKnowSection'
import NextStepsSection from '@/screens/SelfEmployedBookletPage/sections/NextSteps/NextStepsSection'
import PayOrderSection from '@/screens/SelfEmployedBookletPage/sections/PayOrderSection/PayOrderSection'
import ShouldBeConsideredSection from '@/screens/SelfEmployedBookletPage/sections/ShouldBeConsideredSection/ShouldBeConsideredSection'
import UniqueConditionsSection from '@/screens/SelfEmployedBookletPage/sections/UniqueConditionsSection/UniqueConditionsSection'
import WhatNeedsSection from '@/screens/SelfEmployedBookletPage/sections/WhatNeedsSection/WhatNeedsSection'
import WorkScheduleSection from '@/screens/SelfEmployedBookletPage/sections/WorkScheduleSection/WorkScheduleSection'

import FeedbackForm from '@/components/FeedbackForm/FeedbackForm'
import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './SelfEmployedBookletPage.module.scss'

const SelfEmployedBookletPage = () => {
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
				<ImportantToKnowSection />
			</div>

			<PayOrderSection />

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

export default SelfEmployedBookletPage
