import React from 'react'

import AdvantagesSection from '@/screens/SelfEmployedPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/SelfEmployedPage/sections/BannerSection/BannerSection'
import HowItWorksSection from '@/screens/SelfEmployedPage/sections/HowItWorksSection/HowItWorksSection'
import PartTimeSection from '@/screens/SelfEmployedPage/sections/PartTimeSection /PartTimeSection'
import ReviewsSection from '@/screens/SelfEmployedPage/sections/ReviewsSection/ReviewsSection'
import VacanciesSection from '@/screens/SelfEmployedPage/sections/VacanciesSection/VacanciesSection'

import styles from './SelfEmployedPage.module.scss'

const SelfEmployedPage = () => {
	return (
		<section className={styles.root}>
			<BannerSection />
			<AdvantagesSection />
			<PartTimeSection />
			<HowItWorksSection />
			<VacanciesSection />
			<ReviewsSection />
		</section>
	)
}

export default SelfEmployedPage
