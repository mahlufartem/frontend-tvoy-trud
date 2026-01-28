'use client'

import Image from 'next/image'
import React from 'react'

import useDragScroll from '@/hooks/useDragScroll'

import ArrowLeftRoundedIcon from '@/assets/icons/ArrowLeftRoundedIcon'
import ArrowRightRoundedIcon from '@/assets/icons/ArrowRightRoundedIcon'

import styles from './AdvantagesSection.module.scss'
import { advantages } from './data'

const AdvantagesSection = () => {
	const { trackRef, scrollByCard, bind } = useDragScroll({
		gap: 16,
		dragClassName: styles.dragging
	})
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h2 className={styles.title}>Наши преимущества</h2>

				{/*<div className={styles.controls}>*/}
				{/*	<button*/}
				{/*		className={styles.controlBtn}*/}
				{/*		onClick={() => scrollByCard(-1)}*/}
				{/*	>*/}
				{/*		<ArrowLeftRoundedIcon />*/}
				{/*	</button>*/}
				{/*	<button*/}
				{/*		className={styles.controlBtn}*/}
				{/*		onClick={() => scrollByCard(1)}*/}
				{/*	>*/}
				{/*		<ArrowRightRoundedIcon />*/}
				{/*	</button>*/}
				{/*</div>*/}
			</div>

			<div className={styles.viewport}>
				<div
					ref={trackRef}
					className={styles.track}
					{...bind}
				>
					{advantages.map(v => (
						<article
							key={v.id}
							className={styles.card}
						>
							<div className={styles.image}>
								<Image
									src={v.image}
									alt={v.title}
									draggable={false}
								/>
							</div>

							<div className={styles.info}>
								<div className={styles.name}>{v.title}</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}

export default AdvantagesSection
