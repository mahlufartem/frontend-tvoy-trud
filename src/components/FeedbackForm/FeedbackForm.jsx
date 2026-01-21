'use client'

import React, { useState } from 'react'

import PhoneInput from '@/shared/ui/PhoneInput/PhoneInput'

import styles from './FeedbackForm.module.scss'

const FeedbackForm = () => {
	const [form, setForm] = useState({
		name: '',
		phone: '',
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
		console.log(form)
	}

	const isDisabled = !form.name || !form.phone || !form.question

	return (
		<form
			className={styles.root}
			onSubmit={onSubmit}
		>
			<div className={styles.title}>
				<span>Остались вопросы?</span> <br />
				<span>Свяжитесь с нами!</span>
			</div>

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
						<label>Номер телефона</label>
						<PhoneInput
							value={form.phone}
							onChange={handleChange('phone')}
						/>
					</div>
				</div>

				<div className={styles.input}>
					<label>Ваш вопрос</label>
					<input
						placeholder='Опишите ваш вопрос'
						value={form.question}
						onChange={e => handleChange('question')(e.target.value)}
					/>
				</div>
			</div>

			<p className={styles.text}>
				Нажимая на кнопку “Отправить” вы соглашаетесь на обработку персональных
				данных, подтверждаете, что ознакомились с
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
	)
}

export default FeedbackForm
