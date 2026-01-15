'use client'

import React, { useState } from 'react'

import PhoneInput from '@/shared/ui/PhoneInput/PhoneInput'

import styles from './FeedbackForm.module.scss'

const FeedbackForm = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [question, setQuestion] = useState('')

	const onSubmit = e => {
		e.preventDefault()
	}

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
						<label htmlFor=''>Ваше имя</label>
						<input
							placeholder='Введите имя'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className={styles.input}>
						<label htmlFor=''>Номер телефона</label>
						<PhoneInput
							value={phone}
							onChange={setPhone}
						/>
					</div>
				</div>
				<div className={styles.input}>
					<label htmlFor=''>Ваш вопрос</label>
					<input
						placeholder='Опишите ваш вопрос'
						value={question}
						onChange={e => setQuestion(e.target.value)}
					/>
				</div>
			</div>
			<p className={styles.text}>
				Нажимая на кнопку “Отправить” вы соглашаетесь на обработку персональных
				данных, подтверждаете, что ознакомились с
				<a href='#'>политикой сервиса/оператора</a> и даете согласие на
				получение информации.
			</p>
			<button
				className={styles.sendBtn}
				disabled={!name || !phone || !question}
			>
				Отправить
			</button>
		</form>
	)
}

export default FeedbackForm
