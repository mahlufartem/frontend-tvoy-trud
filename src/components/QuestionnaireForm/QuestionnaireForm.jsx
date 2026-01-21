'use client'

import React, { useState } from 'react'

import Dropdown from '@/shared/ui/Dropdown/Dropdown'
import { cities, professions } from '@/shared/ui/Dropdown/data'
import Modal from '@/shared/ui/Modal/Modal'
import PhoneInput from '@/shared/ui/PhoneInput/PhoneInput'

import styles from './QuestionnaireForm.module.scss'

const QuestionnaireForm = ({ isOpen, onClose }) => {
	const [name, setName] = useState('')
	const [lastname, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [profession, setProfession] = useState(null)
	const [city, setCity] = useState(null)

	const onSubmit = e => {
		e.preventDefault()
	}
	return (
		<Modal
			isOpen={isOpen}
			title='Заполните анкету'
			onClose={onClose}
		>
			<form
				className={styles.root}
				onSubmit={onSubmit}
			>
				<div className={styles.inputsGroup}>
					<div className={styles.row}>
						<div className={styles.input}>
							<label htmlFor=''>Ваше имя</label>
							<input
								placeholder='Введите имя'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor=''>Ваша фамилия</label>
							<input
								placeholder='Введите фамилию'
								value={lastname}
								onChange={e => setLastName(e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.input}>
							<label htmlFor=''>Номер телефона</label>
							<PhoneInput
								value={phone}
								onChange={setPhone}
							/>
						</div>
						<div className={styles.input}>
							<Dropdown
								label='Ваша город'
								placeholder='Выберите город'
								options={cities}
								value={city}
								onChange={setCity}
							/>
						</div>
					</div>
					<Dropdown
						label='Ваша профессия'
						placeholder='Выберите профессию'
						options={professions}
						value={profession}
						onChange={setProfession}
					/>
				</div>
				<p className={styles.text}>
					Нажимая на кнопку “Отправить” вы соглашаетесь на обработку
					персональных данных, подтверждаете, что ознакомились с
					<a href='#'> политикой сервиса/оператора</a> и даете согласие на
					получение информации.
				</p>
				<button
					className={styles.sendBtn}
					disabled={!name || !phone || !question}
				>
					Отправить
				</button>
			</form>
		</Modal>
	)
}

export default QuestionnaireForm
