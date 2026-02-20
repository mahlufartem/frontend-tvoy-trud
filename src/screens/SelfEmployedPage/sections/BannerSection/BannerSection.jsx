'use client'

import Image from 'next/image'
import React from 'react'

import { useWindowWidth } from '@/hooks/useWindowWidth'

import { advantages } from '@/screens/PartnersPage/sections/BannerSection/data'

import { form, form2, formS, googlePlay, rustore } from '@/assets/images'
import { bannerHero } from '@/assets/images/selfEmployedPage'

import styles from './BannerSection.module.scss'

const BannerSection = () => {
	const width = useWindowWidth()

	return (
		<section className={styles.root}>
			<div className={styles.left}>
				<div className={styles.info}>
					<div className={styles.header}>
						<h3>
							Найди подработку <br />c помощью Твой труд
						</h3>
						<span>И начни управлять своим доходом</span>
					</div>

					<button className={styles.getWork}>Установить приложение</button>
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
				<div className={styles.advantages}>
					{advantages.map(i => (
						<div
							className={styles.advantage}
							key={i.id}
						>
							<div className={styles.icon}>{i.image}</div>
							<span>{i.text}</span>
						</div>
					))}
				</div>
			</div>

			<div className={styles.right}>
				<div className={styles.formImage}>
					<Image
						src={width > 1023 ? form : formS}
						alt=''
					/>
				</div>
				<div className={styles.personImage}>
					<Image
						src={bannerHero}
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}

export default BannerSection
