import React from 'react'

import AdvantagesSection from '@/screens/SelfEmployedPage/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/screens/SelfEmployedPage/sections/BannerSection/BannerSection'
import PartTimeSection from '@/screens/SelfEmployedPage/sections/PartTimeSection /PartTimeSection'

import styles from './SelfEmployedPage.module.scss'

const SelfEmployedPage = () => {
	return (
		<section className={styles.root}>
			<BannerSection />
			<AdvantagesSection />
			<PartTimeSection />
		</section>
	)
}

export default SelfEmployedPage
