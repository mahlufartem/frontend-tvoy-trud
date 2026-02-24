import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { APP_ROUTES } from '@/constants/routes'

import {
	hashtags,
	heroes
} from '@/screens/SelfEmployedPage/sections/PartTimeSection /data'

import styles from './PartTimeSection.module.scss'

const PartTimeSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h4>Подработка для каждого</h4>
					<span>Огромный выбор подработок с оплатой сразу после смены</span>
				</div>
			</div>

			<div className={styles.heroes}>
				{heroes.map(hero => (
					<div
						className={styles.hero}
						key={hero.id}
					>
						<Image
							src={hero.image}
							alt=''
							fill
							draggable={false}
							className={styles.bg}
						/>
						<span>{hero.label}</span>
					</div>
				))}
			</div>

			<div className={styles.container}>
				<div className={styles.linkWrapper}>
					<Link
						href={APP_ROUTES.primary.catalog}
						className={styles.link}
					>
						Выбрать подработку
					</Link>
				</div>
				<div className={styles.hashtags}>
					<h4>А так же</h4>

					<div className={styles.hashtagsList}>
						{hashtags.map(tag => (
							<div
								className={styles.hashtag}
								key={tag.id}
							>
								#{tag.title}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default PartTimeSection
