'use client'

import React from 'react'

import { useCityStore } from '@/store/userCityStore'

import { cities } from '@/components/ChangeCityModal/data'

import Modal from '@/shared/ui/Modal/Modal'
import SearchInput from '@/shared/ui/SearchInput/SearchInput'

import styles from './ChangeCityModal.module.scss'

const ChangeCityModal = () => {
	const { isOpenCityModal, setCity, closeCityModal } = useCityStore()
	return (
		<Modal
			title='Выберите Ваш город'
			isOpen={isOpenCityModal}
			onClose={closeCityModal}
			className={styles.modal}
		>
			<div className={styles.root}>
				<SearchInput
					className={styles.searchInput}
					placeholder='Поиск по городам'
				/>
				<h2>Города</h2>
				<div className={styles.list}>
					{cities.map(city => (
						<button
							key={city.id}
							onClick={() => {
								setCity(city.name)
								closeCityModal()
							}}
						>
							{city.name}
						</button>
					))}
				</div>
			</div>
		</Modal>
	)
}

export default ChangeCityModal
