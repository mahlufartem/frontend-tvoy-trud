'use client'

import React from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './SectionOne.module.scss'

const SectionOne = () => {
	return (
		<section className={styles.root}>
			<Swiper
				className={styles.swiper}
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default SectionOne
