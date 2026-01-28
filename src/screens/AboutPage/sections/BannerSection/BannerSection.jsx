import Image from 'next/image'
import React from 'react'

import 'swiper/css'
import 'swiper/css/pagination'

import DownloadIcon from '@/assets/icons/DownloadIcon'
import { googlePlay, mainBannerFormsL, rustore } from '@/assets/images/'
import { aboutPageHero } from '@/assets/images/about_page'

import styles from './BannerSection.module.scss'

const BannerSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.banner}>
				<div className={styles.left}>
					<div className={styles.header}>
						<span>/ Возможности и преимущества сервиса</span>
						<h3>О компании</h3>
						<p>
							Компания «Твой Труд» имеет безупречную репутацию на рынке
							трудоустройства молодежи, и вот уже много лет мы предоставляем
							надежную, оптимальную по условиям работу и подработку всем тем,
							кто обращается к нашим специалистам.
							<br />
							<br />
							Скачайте наше приложение что бы убедиться в этом!
						</p>
					</div>
					<div className={styles.apps}>
						<a href='#'>
							<Image
								src={rustore}
								alt='rustore'
								width={75}
							/>
						</a>
						<a href='#'>
							<Image
								src={googlePlay}
								alt='google play'
								width={93}
							/>
						</a>
					</div>
					<div className={styles.apk}>
						<a href='#'>
							<DownloadIcon />
							<p>
								<span>APK файл</span>
							</p>
						</a>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.formImage}>
						<Image
							src={mainBannerFormsL}
							alt=''
						/>
					</div>
					<div className={styles.personImage}>
						<Image
							src={aboutPageHero}
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BannerSection
