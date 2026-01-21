'use client'

import React, { useState } from 'react'

import Dropdown from '@/shared/ui/Dropdown/Dropdown'
import { cities, professions } from '@/shared/ui/Dropdown/data'
import Modal from '@/shared/ui/Modal/Modal'
import PhoneInput from '@/shared/ui/PhoneInput/PhoneInput'

import styles from './QuestionnaireForm.module.scss'

const QuestionnaireForm = ({ isOpen, onClose }) => {
	const [form, setForm] = useState({
		name: '',
		lastname: '',
		phone: '',
		city: null,
		profession: null
	})

	const handleChange = field => value => {
		setForm(prev => ({
			...prev,
			[field]: value
		}))
	}

	const onSubmit = e => {
		e.preventDefault()
	}

	const isDisabled = !form.name || !form.phone || !form.city || !form.profession

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
							<label>Ваше имя</label>
							<input
								placeholder='Введите имя'
								value={form.name}
								onChange={e => handleChange('name')(e.target.value)}
							/>
						</div>

						<div className={styles.input}>
							<label>Ваша фамилия</label>
							<input
								placeholder='Введите фамилию'
								value={form.lastname}
								onChange={e => handleChange('lastname')(e.target.value)}
							/>
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.input}>
							<label>Номер телефона</label>
							<PhoneInput
								value={form.phone}
								onChange={handleChange('phone')}
							/>
						</div>

						<div className={styles.input}>
							<Dropdown
								label='Ваш город'
								placeholder='Выберите город'
								options={cities}
								value={form.city}
								onChange={handleChange('city')}
							/>
						</div>
					</div>

					<Dropdown
						label='Ваша профессия'
						placeholder='Выберите профессию'
						options={professions}
						value={form.profession}
						onChange={handleChange('profession')}
					/>
				</div>

				<p className={styles.text}>
					Нажимая на кнопку “Отправить” вы соглашаетесь на обработку
					персональных данных, подтверждаете, что ознакомились с
					<a href='#'> политикой сервиса/оператора</a> и даете согласие на
					получение информации.
				</p>

				<button
					type='submit'
					className={styles.sendBtn}
					disabled={isDisabled}
				>
					Отправить
				</button>
			</form>
		</Modal>
	)
}

export default QuestionnaireForm
