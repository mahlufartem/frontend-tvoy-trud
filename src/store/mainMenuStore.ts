import { create } from 'zustand'

export const useMainMenuStore = create(set => ({
	isMenuOpen: false,
	openMenu: () => set({ isMenuOpen: true }),
	closeMenu: () => set({ isMenuOpen: false }),
	toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen }))
}))
