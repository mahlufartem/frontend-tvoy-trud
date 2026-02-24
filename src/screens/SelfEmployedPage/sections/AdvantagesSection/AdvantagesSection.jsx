import Image from 'next/image'
import React from 'react'

import { advantages } from '@/screens/SelfEmployedPage/sections/AdvantagesSection/data'

import PartnersCarousel from '@/components/PartnersCarousel/PartnersCarousel'
import VacanciesCarousel from '@/components/VacanciesCarousel/VacanciesCarousel'

import styles from './AdvantagesSection.module.scss'

const AdvantagesSection = () => {
	return (
		<section className={styles.root}>
			<h4>
				Преимущества <br /> исполнителей Твой Труд
			</h4>

			<div className={styles.row}>
				{advantages.slice(0, 2).map(i => (
					<div
						className={styles.advantage}
						key={i.id}
					>
						<Image
							src={i.image}
							alt={i.title}
						/>

						<span>{i.title}</span>
						<p>{i.text}</p>
					</div>
				))}
			</div>
			<div className={styles.row}>
				{advantages.slice(2, 5).map(i => (
					<div
						className={styles.advantage}
						key={i.id}
					>
						<Image
							src={i.image}
							alt={i.title}
						/>

						<span>{i.title}</span>
						<p>{i.text}</p>
					</div>
				))}
			</div>

			<section>
				<VacanciesCarousel headerStyles={styles.vacanciesCarouselHeader} />
			</section>

			<section className={styles.partners}>
				<PartnersCarousel />
			</section>
		</section>
	)
}

export default AdvantagesSection
