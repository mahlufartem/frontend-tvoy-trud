'use client'

import React, { useState } from 'react'

import Dropdown from '@/shared/ui/Dropdown/Dropdown'
import Modal from '@/shared/ui/Modal/Modal'
import PhoneInput from '@/shared/ui/PhoneInput/PhoneInput'

import styles from './AppealToManagementForm.module.scss'

const cities = [
	{ id: 1, label: 'Ростов-На-Дону' },
	{ id: 2, label: 'Аксай' },
	{ id: 3, label: 'Нвочеркаск' }
]

const AppealToManagementForm = ({ isOpen, onClose }) => {
	const [form, setForm] = useState({
		name: '',
		lastname: '',
		phone: '',
		city: null,
		email: '',
		profession: '',
		theme: '',
		question: ''
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

	const isDisabled =
		!form.name ||
		!form.phone ||
		!form.city ||
		!form.profession ||
		!form.email ||
		!form.theme ||
		!form.question

	return (
		<Modal
			isOpen={isOpen}
			title='Горячая линия для пользователей сервиса “Твой Труд”'
			subtitle='Создайте обращение к руководству компании, если у Вас возник вопрос или
				предложение.'
			onClose={onClose}
			className={styles.modal}
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
							<label>Ваш email</label>
							<input
								placeholder='Введите email'
								value={form.email}
								onChange={e => handleChange('email')(e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.input}>
							<Dropdown
								label='Ваш город'
								placeholder='Выберите город'
								options={cities}
								value={form.city}
								onChange={handleChange('city')}
							/>
						</div>
						<div className={styles.input}>
							<label>Где работали?</label>
							<input
								placeholder=''
								value={form.profession}
								onChange={e => handleChange('profession')(e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.input}>
							<label>Тема</label>
							<input
								placeholder=''
								value={form.theme}
								onChange={e => handleChange('theme')(e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.input}>
							<label>Введите вопрос</label>
							<textarea
								placeholder='Ваш вопрос/проблема'
								value={form.question}
								onChange={e => handleChange('question')(e.target.value)}
							/>
						</div>
					</div>
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

export default AppealToManagementForm
