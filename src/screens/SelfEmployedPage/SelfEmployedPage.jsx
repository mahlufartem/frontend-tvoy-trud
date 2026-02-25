import React from 'react'

import FaqSection from '@/screens/FaqPage/sections/FaqSection/FaqSection'
import Banner2Section from '@/screens/SelfEmployedPage/Banner2Section/Banner2Section'
import AdvantagesSection from '@/screens/SelfEmployedPage/sections/AdvantagesSection/AdvantagesSection'
import AnswerQuestionSection from '@/screens/SelfEmployedPage/sections/AnswerQuestionSection/AnswerQuestionSection'
import BannerSection from '@/screens/SelfEmployedPage/sections/BannerSection/BannerSection'
import FooterSection from '@/screens/SelfEmployedPage/sections/FooterSection/FooterSection'
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
			<AnswerQuestionSection />
			<FooterSection />
		</section>
	)
}

export default SelfEmployedPage
