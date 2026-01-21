'use client'

import { useEffect } from 'react'

import { createPortal } from 'react-dom'

import CrossIcon from '@/assets/icons/CrossIcon'

import styles from './Modal.module.scss'

const Modal = ({
	isOpen,
	title,
	onClose,
	children,
	className,
	closeOnOverlay = true
}) => {
	if (!isOpen) return null

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	useEffect(() => {
		const onKeyDown = e => {
			if (e.key === 'Escape') onClose?.()
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [onClose])

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
