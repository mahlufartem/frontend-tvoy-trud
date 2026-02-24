import React from 'react'

import AdvantagesSection from '@/screens/SelfEmployedPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/SelfEmployedPage/sections/BannerSection/BannerSection'

import styles from './SelfEmployedPage.module.scss'

const SelfEmployedPage = () => {
	return (
		<section className={styles.root}>
			<BannerSection />
			<AdvantagesSection />
		</section>
	)
}

export default SelfEmployedPage
