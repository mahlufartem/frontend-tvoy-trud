import React from 'react'

import ConsultationSection from '@/screens/PartnersPage/ConsultationSection/ConsultationSection'
import AdvantagesSection from '@/screens/PartnersPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/PartnersPage/sections/BannerSection/BannerSection'
import InfoSection from '@/screens/PartnersPage/sections/InfoSection/InfoSection'
import PartnersSection from '@/screens/PartnersPage/sections/PartnersSection/PartnersSection'

import styles from './PartnersPage.module.scss'

const PartnersPage = () => {
	return (
		<div className={styles.root}>
			<BannerSection />
			<AdvantagesSection />
			<PartnersSection />
			<InfoSection />
			<ConsultationSection />
		</div>
	)
}

export default PartnersPage
