import { getNavigatorLanguage } from '../assets/utils'

export default function({ store }) {
  if (store.state.readClientData) {
    return
  }

  const locale = localStorage.getItem('locale')
  store.commit('SET_LOCALE', { locale: locale || getNavigatorLanguage() })

  store.commit('SET_READ_CLIENT_DATA', { readClientData: true })
}
