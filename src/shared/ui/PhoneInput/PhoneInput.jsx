'use client'

import React from 'react'

const formatPhone = value => {
	const digits = value.replace(/\D/g, '')

	const cleaned =
		digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits

	let result = '+7'

	if (cleaned.length > 0) {
		result += ' (' + cleaned.slice(0, 3)
	}
	if (cleaned.length >= 4) {
		result += ') ' + cleaned.slice(3, 6)
	}
	if (cleaned.length >= 7) {
		result += '-' + cleaned.slice(6, 8)
	}
	if (cleaned.length >= 9) {
		result += '-' + cleaned.slice(8, 10)
	}

	return result
}

const PhoneInput = ({
	value,
	onChange,
	placeholder = '+7 (___) ___-__-__'
}) => {
	const handleChange = e => {
		const formatted = formatPhone(e.target.value)
		onChange(formatted)
	}

	return (
		<input
			type='tel'
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			inputMode='tel'
		/>
	)
}

export default PhoneInput
