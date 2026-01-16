import { create } from 'zustand'

export const useCatalogFiltersStore = create((set, get) => ({
	isMobileFiltersOpen: false,
	openMobileFilters: () => set({ isMobileFiltersOpen: true }),
	closeMobileFilters: () => set({ isMobileFiltersOpen: false }),
	toggleMobileFilters: () =>
		set(state => ({ isMobileFiltersOpen: !state.isMobileFiltersOpen })),

	/* ---------------- accordion ---------------- */

	openAccordions: {}, // { brands: true, metro: true }

	isAccordionOpen: key => Boolean(get().openAccordions[key]),

	toggleAccordion: key =>
		set(state => ({
			openAccordions: {
				...state.openAccordions,
				[key]: !state.openAccordions[key]
			}
		})),

	closeAllAccordions: () => set({ openAccordions: {} }),

	/* ---------------- filters values ---------------- */

	filters: {
		brands: [],
		metro: [],
		orderTypes: []
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
			filters: {
				brands: [],
				metro: [],
				orderTypes: []
			}
		})
}))
