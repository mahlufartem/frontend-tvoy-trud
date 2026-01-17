'use client'

import React, { useRef, useState } from 'react'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'

import styles from './Accordion.module.scss'

const Accordion = ({ title, defaultOpen = false, children, rightSlot }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen)
	const contentRef = useRef(null)

	const toggle = () => setIsOpen(v => !v)

	return (
		<div className={styles.root}>
			<button
				type='button'
				className={styles.header}
				onClick={toggle}
				aria-expanded={isOpen}
			>
				<div className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
					<ArrowDownIcon />
				</div>

				<span className={styles.title}>{title}</span>

				{rightSlot && (
					<div
						className={styles.right}
						onClick={e => e.stopPropagation()}
					>
						{rightSlot}
					</div>
				)}
			</button>

			<div
				ref={contentRef}
				className={`${styles.collapse} ${isOpen ? styles.open : ''}`}
				style={{
					maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : 0
				}}
			>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}

export default Accordion
