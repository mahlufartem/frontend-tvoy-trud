import React from 'react'

import Banner2Section from '@/screens/SelfEmployedPage/Banner2Section/Banner2Section'
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
			<Banner2Section />
		</section>
	)
}

export default SelfEmployedPage
