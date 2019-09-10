import { serialize, parse } from 'cookie'
import { Duration } from 'luxon'

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

      // update the document cookie if document exists
      if (typeof document !== 'undefined') {
        document.cookie = serialize('locale', locale, {
          maxAge: Duration.fromObject({ year: 1 }).as('seconds'),
        })
      }
    }
  },
  SET_READ_CLIENT_DATA(state, { readClientData }) {
    state.readClientData = readClientData
  },
}
