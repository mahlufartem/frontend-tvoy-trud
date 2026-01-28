'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { useWindowWidth } from '@/hooks/useWindowWidth'

import {
	contactPerson,
	contactPerson_M,
	contactPerson_S
} from '@/assets/images/about_page'

import QuestionnaireForm from '@/components/QuestionnaireForm/QuestionnaireForm'

import styles from './ContactUsSection.module.scss'

const ContactUsSection = () => {
	const [open, setOpen] = useState(false)
	const width = useWindowWidth()

	const image =
		width === 0
			? contactPerson
			: width < 1023
				? contactPerson_S
				: width < 1210
					? contactPerson_M
					: contactPerson

	return (
		<section className={styles.root}>
			<div className={styles.content}>
				<div className={styles.left}>
					<h4>Свяжитесь с нами</h4>
					<span>И мы трудостроим вас за 24 часа!</span>

					<button onClick={() => setOpen(true)}>Связаться</button>
				</div>
				<div className={styles.image}>
					<Image
						key={image.src}
						src={image}
						alt=''
					/>
				</div>
			</div>
			<QuestionnaireForm
				isOpen={open}
				onClose={() => setOpen(false)}
			/>
		</section>
	)
}

export default ContactUsSection
