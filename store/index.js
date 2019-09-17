export const state = () => ({
  email: 'hello@naito.one',
  sidebarOpened: false,
  readClientData: false,

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

      this.app.i18n.locale = locale
      localStorage.setItem('locale', locale)
    }
  },
  SET_READ_CLIENT_DATA(state, { readClientData }) {
    state.readClientData = readClientData
  },
}
