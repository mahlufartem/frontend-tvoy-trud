import React from 'react'

import ReviewsCarousel from '@/components/ReviewsCarousel/ReviewsCarousel'

import styles from './ReviewsSection.module.scss'

const ReviewsSection = () => {
	return (
		<section>
			<ReviewsCarousel rootStyles={styles.carousel} />
		</section>
	)
}

export default ReviewsSection
