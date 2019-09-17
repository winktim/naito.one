import { serialize, parse } from 'cookie'
import { Duration } from 'luxon'
import { getNavigatorLanguage } from '../assets/utils'
export default function({ isHMR, store, route, req, res }) {
  if (isHMR) {
    // ignore if called from hot module replacement
    return
  }

  console.log('called middleware from', req ? 'server' : 'client')

  if (route.name) {
    const cookie = req ? req.headers.cookie : document.cookie

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
      if (req) {
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

    if (req) {
      res.setHeader('Set-Cookie', [newCookie])
    } else {
      // TODO: if using more cookies, this could overwrite them all !
      document.cookie = newCookie
    }
  }
}
