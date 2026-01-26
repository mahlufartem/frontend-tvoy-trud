import { create } from 'zustand'

const initialFilters = {
	radius: 0,
	date: '',
	startTime: '',
	endTime: '',
	brands: [],
	orderTypes: []
}

export const useCatalogFiltersStore = create((set, get) => ({
	isMobileFiltersOpen: false,
	openMobileFilters: () => set({ isMobileFiltersOpen: true }),
	closeMobileFilters: () => set({ isMobileFiltersOpen: false }),
	toggleMobileFilters: () =>
		set(state => ({ isMobileFiltersOpen: !state.isMobileFiltersOpen })),

	openAccordions: {},

	isAccordionOpen: key => Boolean(get().openAccordions[key]),

	toggleAccordion: key =>
		set(state => ({
			openAccordions: {
				...state.openAccordions,
				[key]: !state.openAccordions[key]
			}
		})),

	closeAllAccordions: () => set({ openAccordions: {} }),

	view: 'list',

	filters: initialFilters,

	setView: view =>
		set(state => ({
			view
		})),

	activeFiltersCount: () => {
		const { filters } = get()

		let count = 0

		if (filters.radius > 0) count++
		if (filters.date) count++
		if (filters.startTime) count++
		if (filters.endTime) count++
		if (filters.brands.length > 0) count++
		if (filters.orderTypes.length > 0) count++

		return count
	},

	setFilter: (key, value) =>
		set(state => ({
			filters: {
				...state.filters,
				[key]: value
			}
		})),

	resetFilters: () =>
		set({
			filters: initialFilters,
			openAccordions: {}
		})
}))
