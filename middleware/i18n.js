import { serialize, parse } from 'cookie'
import { Duration } from 'luxon'
import { getNavigatorLanguage } from '../assets/utils'

export default function({ isHMR, store, route, req, res }) {
  console.log('called middleware from', process.server ? 'server' : 'client')

  if (isHMR) {
    // ignore if called from hot module replacement
    return
  }

  // on server but there is no request
  if (process.server && !req) {
    return
  }

  if (route.name) {
    const cookie = process.server ? req.headers.cookie : document.cookie

    // server
    let locale = null

    // check if the locale cookie is set
    if (cookie) {
      const cookies = parse(cookie)

      if (cookies['locale']) {
        locale = cookies['locale']
      }
    }

    if (!locale) {
      // if the locale cookie is not set, fallback to
      // accept-language header on server, and browser language on client
      if (process.server) {
        locale = req.headers['accept-language']
          .split(',')[0]
          .toLocaleLowerCase()
          .substring(0, 2)
      } else {
        locale = getNavigatorLanguage()
      }
    }

    store.commit('SET_LOCALE', { locale })

    // set the cookie back
    const newCookie = serialize('locale', locale, {
      maxAge: Duration.fromObject({ year: 1 }).as('seconds'),
    })

    if (process.server) {
      res.setHeader('Set-Cookie', [newCookie])
    } else {
      // TODO: if using more cookies, this could overwrite them all !
      document.cookie = newCookie
    }
  }
}
