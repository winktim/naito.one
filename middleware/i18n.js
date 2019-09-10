import { serialize, parse } from 'cookie'
import { Duration } from 'luxon'

export default function({ isHMR, store, route, req, res }) {
  if (isHMR) {
    // ignore if called from hot module replacement
    return
  }

  if (req) {
    if (route.name) {
      let locale = null

      // check if the locale cookie is set
      if (req.headers.cookie) {
        const cookies = parse(req.headers.cookie)

        if (cookies['locale']) {
          locale = cookies['locale']
        }
      }

      // if the locale cookie is not set, fallback to accept-language header
      if (!locale) {
        locale = req.headers['accept-language']
          .split(',')[0]
          .toLocaleLowerCase()
          .substring(0, 2)
      }

      store.commit('SET_LOCALE', { locale })
      res.setHeader('Set-Cookie', [
        serialize('locale', locale, {
          maxAge: Duration.fromObject({ year: 1 }).as('seconds'),
        }),
      ])
    }
  }
}
