import Image from 'next/image'
import React from 'react'

import { consideres } from '@/screens/SelfEmployedPage/sections/ShouldBeConsideredSection/data'

import { lamp, warning } from '@/assets/images'

import styles from './ShouldBeConsideredSection.module.scss'

const ShouldBeConsideredSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.header}>
				<Image
					src={lamp}
					alt=''
				/>
				<h4>Самозанятому следует учитывать </h4>
			</div>
			<div className={styles.list}>
				{consideres.map(item => (
					<div
						className={styles.consider}
						key={item.id}
					>
						<span className={styles.considerLine}>/</span>
						<span className={styles.considerText}>
							{item.text}
							<span>{item.highlightText}</span>
						</span>
					</div>
				))}
			</div>
			<div className={styles.warning}>
				<div className={styles.warningTitle}>
					<Image
						src={warning}
						alt=''
					/>
					<span>
						Возникли трудности, к кому <br /> обратиться?
					</span>
				</div>
				<p>
					Телефонный номер для связи при возникновении проблем на КПП или по
					вопросам поиска склада: <a href=''>+7 (987) 816 07 37</a>
				</p>
			</div>
		</section>
	)
}

export default ShouldBeConsideredSection
