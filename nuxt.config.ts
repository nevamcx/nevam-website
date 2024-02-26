import path from 'path'

export default {
  
  components: [
    {
      dirs: [
        '~/components',
        '~/components/atoms',
        '~/components/molecules',
        '~/components/organisms'
      ]
    }
  ],

  runtimeConfig: {
    public: {
      calendly: 'https://calendly.com/nevamcx/information-about-nevam-cx'
    }
  },

  css: ['~/assets/style/main.scss'],

  content: {
    contentHead: false
  },

  app: {

    head: {
      title: 'Nevam CX',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://nevamcx.com' },
        { name: 'og:site_name', content: 'Nevam CX' },
        { name: 'description', content: 'Nevam CX helps you identify problems in your digital customer experience' },
        { name: 'og:description', content: 'Nevam CX helps you identify problems in your digital customer experience' },
        { name: 'og:image', content: 'https://nevamcx.com/images/logo-thumbnail.svg' },
        { name: 'og:locale', content: 'en_AU' }
      ],
      link: [
        // https://favicon.io/favicon-converter
        { rel: 'apple-touch-icon', sizes: "180x180", type: 'image/x-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [{}]
    }
  },

  modules: ['@pinia/nuxt', "@nuxt/content"],

  nitro: {
    output: {
      publicDir: path.join(__dirname, '.output/public')
    }
  },

  // stop prefetching: <link rel="prefetch" href="/_nuxt/swiper.min.143156a0.js">
  hooks: {
    'build:manifest': (manifest: any) => {
      for (const key in manifest) {
        manifest[key].dynamicImports = []
      }
    }
  }
}