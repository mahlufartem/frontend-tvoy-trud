import React from 'react'

import AdvantagesSection from '@/screens/PartnersPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/PartnersPage/sections/BannerSection/BannerSection'

import styles from './PartnersPage.module.scss'

const PartnersPage = () => {
	return (
		<div className={styles.root}>
			<BannerSection />
			<AdvantagesSection />
		</div>
	)
}

export default PartnersPage
