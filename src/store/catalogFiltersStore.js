import { create } from 'zustand'

const initialFilters = {
	radius: 0,
	date: '',
	startTime: '09:00',
	endTime: '09:00',
	brands: [],
	orderTypes: []
}

export const useCatalogFiltersStore = create((set, get) => ({
	/* ---------------- mobile ---------------- */

	isMobileFiltersOpen: false,
	openMobileFilters: () => set({ isMobileFiltersOpen: true }),
	closeMobileFilters: () => set({ isMobileFiltersOpen: false }),
	toggleMobileFilters: () =>
		set(state => ({ isMobileFiltersOpen: !state.isMobileFiltersOpen })),

	/* ---------------- accordion ---------------- */

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

	/* ---------------- filters ---------------- */

	filters: initialFilters,

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
