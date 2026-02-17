import React from 'react'

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
		</div>
	)
}

export default PartnersPage
