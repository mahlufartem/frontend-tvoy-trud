'use client'

import Image from 'next/image'
import React from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Banner_1 from '@/screens/MainPage/Banners/Banner_1/Banner_1'
import Banner_2 from '@/screens/MainPage/Banners/Banner_2/Banner_2'
import Banner_3 from '@/screens/MainPage/Banners/Banner_3/Banner_3'

import CalendarIcon from '@/assets/icons/CalendarIcon'
import DownloadIcon from '@/assets/icons/DownloadIcon'
import HomeIcon from '@/assets/icons/HomeIcon'
import RubleIcon from '@/assets/icons/RubleIcon'
import StudyIcon from '@/assets/icons/StudyIcon'
import {
	googlePlay,
	mainBannerFormsL,
	mainBannerPerson,
	rustore
} from '@/assets/images'

import styles from './Section_1.module.scss'

const Section_1 = () => {
	return (
		<section className={styles.root}>
			<Swiper
				className={styles.swiper}
				modules={[Pagination, Mousewheel]}
				spaceBetween={50}
				slidesPerView={1}
				autoHeight
				navigation
				pagination={{ clickable: true }}
				mousewheel={{
					forceToAxis: true,
					sensitivity: 1,
					releaseOnEdges: false
				}}
			>
				<SwiperSlide>
					<Banner_1 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner_2 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner_3 />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default Section_1
