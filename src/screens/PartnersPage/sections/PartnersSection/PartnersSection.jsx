import React from 'react'

import PartnersCarousel from '@/components/PartnersCarousel/PartnersCarousel'

import styles from './PartnersSection.module.scss'

const PartnersSection = () => {
	return (
		<section className={styles.root}>
			<PartnersCarousel />
		</section>
	)
}

export default PartnersSection
