'use client'

import { useEffect } from 'react'

import { createPortal } from 'react-dom'

import CrossIcon from '@/assets/icons/CrossIcon'

import styles from './Modal.module.scss'

const Modal = ({
	isOpen,
	title,
	subtitle,
	onClose,
	children,
	className,
	closeOnOverlay = true
}) => {
	useEffect(() => {
		if (!isOpen) return

		const originalOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = originalOverflow
		}
	}, [isOpen])

	useEffect(() => {
		if (!isOpen) return

		const onKeyDown = e => {
			if (e.key === 'Escape') onClose?.()
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [isOpen, onClose])

	if (!isOpen) return null

	return createPortal(
		<div
			className={styles.overlay}
			onClick={closeOnOverlay ? onClose : undefined}
		>
			<div
				className={`${styles.modal} ${className || ''}`}
				onClick={e => e.stopPropagation()}
			>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					{subtitle ? <p>{subtitle}</p> : null}
					<button
						className={styles.close}
						onClick={onClose}
						aria-label='Закрыть'
					>
						<CrossIcon />
					</button>
				</div>

				{children}
			</div>
		</div>,
		document.body
	)
}

export default Modal
