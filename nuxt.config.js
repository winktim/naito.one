import path from 'path'
import glob from 'glob-all'

const features = ['es2015', 'es2016', 'IntersectionObserver'].join('%2C')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Naito One',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'ie=edge' },
      {
        hid: 'description',
        name: 'description',
        content: 'Swiss company creating innovative IT solutions',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],

    script: [
      {
        src: `https://polyfill.io/v3/polyfill.min.js?features=${features}`,
        body: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/scss/icons.scss',
    '~/assets/scss/components.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/marked.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-i18n'],

  router: {
    middleware: 'i18n',
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-purgecss'],

  purgeCSS: {
    paths: glob.sync([
      path.join(__dirname, './pages/**/*.vue'),
      path.join(__dirname, './layouts/**/*.vue'),
      path.join(__dirname, './components/**/*.vue'),
    ]),
    // whitelist for markdown
    whitelist: ['.marked', 'h1', 'ul', 'ol', 'pre', 'code', 'blockquote'],
    whitelistPatterns: [/\bhljs\S*/],
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.locales = __dirname + '/locales'

      config.module.rules.push({
        test: /\.md/,
        use: [
          { loader: 'raw-loader' },
          {
            loader: 'markdownit-loader',
            options: {
              link_open: (tokens, idx, options, env, slf) => {
                const token = tokens[idx]
                token.attrs = token.attrs.map(attr => {
                  if (attr[0] === 'href') attr[0] = 'to'
                  return attr
                })
                return '<nuxt-link' + slf.renderAttrs(token) + '>'
              },
              link_close: () => '</nuxt-link>',
            },
          },
        ],
      })
    },
  },
}
