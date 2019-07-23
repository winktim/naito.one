export const state = () => ({
  email: 'hello@naito.one',
  sidebarOpened: false,

  locales: ['en', 'fr'],
  locale: 'en',
})

export const mutations = {
  SET_SIDEBAR_OPENED(state, { sidebarOpened }) {
    state.sidebarOpened = sidebarOpened
  },
  SET_LOCALE(state, { locale }) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
}
