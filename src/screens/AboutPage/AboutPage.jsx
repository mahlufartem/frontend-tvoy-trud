import React from 'react'

import AdvantagesSection from '@/screens/AboutPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/AboutPage/sections/BannerSection/BannerSection'
import ContactUsSection from '@/screens/AboutPage/sections/ContactUsSection/ContactUsSection'
import DocSection from '@/screens/AboutPage/sections/DocSection/DocSection'

import VacanciesCarouselMin from '@/components/VacanciesCarouselMin/VacanciesCarouselMin'

const AboutPage = () => {
	return (
		<div>
			<BannerSection />
			<AdvantagesSection />
			<VacanciesCarouselMin />
			<ContactUsSection />
			<DocSection />
		</div>
	)
}

export default AboutPage
