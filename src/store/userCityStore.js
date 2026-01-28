import { create } from 'zustand'

export const useCityStore = create((set, get) => ({
	city: null,
	loading: true,
	isOpenCityModal: false,
	openCityModal: () => set({ isOpenCityModal: true }),
	closeCityModal: () => set({ isOpenCityModal: false }),
	setOpenChangeCityModal: () =>
		set(state => ({
			isOpenCityModal: !state.isOpenCityModal
		})),
	setCity: city => {
		localStorage.setItem('userCity', city)
		set({ city })
	},

	initCity: async () => {
		const savedCity = localStorage.getItem('userCity')

		if (savedCity) {
			set({ city: savedCity, loading: false })
			return
		}

		// try {
		// 	const res = await fetch('https://ipwho.is/?lang=ru')
		// 	const data = await res.json()
		//
		// 	if (data.success && data.city) {
		// 		localStorage.setItem('userCity', data.city)
		// 		set({ city: data.city })
		// 	}
		// } catch (e) {
		// 	console.warn('Не удалось определить город')
		// } finally {
		// 	set({ loading: false })
		// }
	}
}))
