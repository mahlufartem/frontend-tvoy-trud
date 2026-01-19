'use client'

import Image from 'next/image'
import React from 'react'

import { useWindowWidth } from '@/hooks/useWindowWidth'

import {
	contactPerson,
	contactPerson_M,
	contactPerson_S
} from '@/assets/images/about_page'

import styles from './ContactUsSection.module.scss'

const ContactUsSection = () => {
	const width = useWindowWidth()

	return (
		<section className={styles.root}>
			<div className={styles.content}>
				<div className={styles.left}>
					<h4>Свяжитесь с нами</h4>
					<span>И мы трудостроим вас за 24 часа!</span>

					<button>Связаться</button>
				</div>
				<div className={styles.image}>
					<Image
						src={
							width < 1023
								? contactPerson_S
								: width < 1210
									? contactPerson_M
									: contactPerson
						}
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}

export default ContactUsSection
