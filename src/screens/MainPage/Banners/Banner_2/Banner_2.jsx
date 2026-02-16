import Image from 'next/image'
import React from 'react'

import DownloadIcon from '@/assets/icons/DownloadIcon'
import {
	googlePlay,
	mainBannerFormsL,
	mainBannerPerson2,
	rustore
} from '@/assets/images'

import styles from './Banner_2.module.scss'

const Banner1 = () => {
	return (
		<div className={styles.root}>
			<div className={styles.left}>
				<div className={styles.header}>
					<span>/ Зарабатывайте с нами</span>
					<h3>
						Выходите на работу
						<br /> уже завтра!
					</h3>
					<span>
						У нас есть работа на каждый день без начальства, <br /> долгих
						собеседований и оформления
					</span>
				</div>

				<button className={styles.getWork}>Получить работу</button>
				<div className={styles.apk}>
					<a href='#'>
						<DownloadIcon />
						<p>
							<span>APK файл</span>
						</p>
					</a>
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
						src={mainBannerPerson2}
						alt=''
					/>
				</div>
				<div className={styles.personInfo}>
					<span className={styles.personInfo__title}>Ставка</span>
					<span className={styles.personInfo__price}>
						от 400 ₽ <br /> в час
					</span>
				</div>
			</div>
		</div>
	)
}

export default Banner1
