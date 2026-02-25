import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { footerBanner } from '@/assets/images/selfEmployedPage'

import styles from './FooterSection.module.scss'

const FooterSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.content}>
				<h3>Установите приложение для поиска подработки Твой Труд</h3>
				<Link href='#'>Установить приложение</Link>
			</div>
			<Image
				src={footerBanner}
				alt=''
				className={styles.image}
			/>
		</section>
	)
}

export default FooterSection
