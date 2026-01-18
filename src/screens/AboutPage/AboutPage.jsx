import React from 'react'

import AdvantagesSection from '@/screens/AboutPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/AboutPage/sections/BannerSection/BannerSection'

import VacanciesCarouselMin from '@/components/VacanciesCarouselMin/VacanciesCarouselMin'

const AboutPage = () => {
	return (
		<div>
			<BannerSection />
			<AdvantagesSection />
			<VacanciesCarouselMin />
		</div>
	)
}

export default AboutPage
