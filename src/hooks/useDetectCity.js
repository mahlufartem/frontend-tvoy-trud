'use client'

import { useEffect, useState } from 'react'

export const useDetectCity = () => {
	const [city, setCity] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const savedCity = localStorage.getItem('userCity')
		if (savedCity) {
			setLoading(false)
			return
		}

		fetch('https://ipwho.is/?lang=ru')
			.then(res => res.json())
			.then(data => {
				if (data.success && data.city) {
					setCity(data.city)
				}
			})
			.catch(() => {
				setCity(null)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	return { city, loading }
}
