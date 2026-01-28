'use client'

import React, { useEffect, useState } from 'react'

import { useDetectCity } from '@/hooks/useDetectCity'

import { useCityStore } from '@/store/userCityStore'

import styles from './CityConfirmModal.module.scss'

const CityConfirmModal = () => {
	const { city, loading } = useDetectCity()
	const { isOpenCityModal, setCity, openCityModal, closeCityModal } =
		useCityStore()
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const savedCity = localStorage.getItem('userCity')
		if (!savedCity) {
			setIsOpen(true)
		}
	}, [])

	const confirmCity = () => {
		setCity(city)
		localStorage.setItem('userCity', city)
		setIsOpen(false)
	}

	const changeCity = () => {
		openCityModal()
		setIsOpen(false)
	}

	if (!isOpen || loading || !city) return null

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<button
					className={styles.close}
					onClick={() => setIsOpen(false)}
				>
					×
				</button>

				<h4>Ваш город {city}?</h4>

				<div className={styles.actions}>
					<button
						className={styles.yes}
						onClick={confirmCity}
					>
						Да
					</button>
					<button
						className={styles.change}
						onClick={changeCity}
					>
						Сменить
					</button>
				</div>
			</div>
		</div>
	)
}

export default CityConfirmModal
