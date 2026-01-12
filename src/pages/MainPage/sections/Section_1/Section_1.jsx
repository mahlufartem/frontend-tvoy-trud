'use client'

import Image from 'next/image'
import React from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
	mainBannerFormsL,
	mainBannerFormsXL,
	mainBannerPerson
} from '@/assets/images'

import styles from './Section_1.module.scss'

const Section_1 = () => {
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
				<SwiperSlide>
					<div className={styles.banner}>
						<div className={styles.left}></div>
						<div className={styles.right}>
							<div className={styles.formImage}>
								<Image
									src={mainBannerFormsL}
									alt=''
								/>
							</div>
							<div className={styles.personImage}>
								<Image
									src={mainBannerPerson}
									alt=''
								/>
							</div>
							<div className={styles.personInfo}>
								<span className={styles.personInfo__title}>Грузчик</span>
								<span className={styles.personInfo__price}>
									до 2 800 ₽ за смену
								</span>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default Section_1
