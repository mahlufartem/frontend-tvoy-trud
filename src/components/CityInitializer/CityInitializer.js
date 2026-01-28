'use client'

import { useEffect } from 'react'

import { useCityStore } from '@/store/userCityStore'

export const CityInitializer = () => {
	const initCity = useCityStore(state => state.initCity)

	useEffect(() => {
		initCity()
	}, [initCity])

	return null
}

export default CityInitializer
