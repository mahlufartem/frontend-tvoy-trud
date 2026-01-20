import React from 'react'
import { Suspense } from 'react'

import AdvantagesSection from '@/screens/AboutPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/AboutPage/sections/BannerSection/BannerSection'
import ContactUsSection from '@/screens/AboutPage/sections/ContactUsSection/ContactUsSection'
import ContactsSection from '@/screens/AboutPage/sections/ContactsSection/ContactsSection'
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
			<Suspense fallback={null}>
				<ContactsSection />
			</Suspense>
		</div>
	)
}

export default AboutPage
