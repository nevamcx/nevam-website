import path from 'path'
import isCI from 'is-ci'

const timeStamp = () => {
  const date = new Date()
  const options = {
  	year: 'numeric',
    month: 'short',
    weekday: 'long',
    day: 'numeric',
    minute: '2-digit',
		hour: '2-digit'
  }
  if(isCI) {
    date.setHours(date.getHours() - 3)
  }
  return date.toLocaleTimeString('en-au', options)
}

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
      title: 'NEVAM CX',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://nevamcx.com' },
        { name: 'og:site_name', content: 'NEVAM CX' },
        { name: 'description', content: 'NEVAM CX helps you identify problems in your digital customer experience' },
        { name: 'og:description', content: 'NEVAM CX helps you identify problems in your digital customer experience' },
        { name: 'og:image', content: 'https://nevamcx.com/images/logo-thumbnail.svg' },
        { name: 'og:locale', content: 'en_AU' },
        { name: 'cache_date_time', content: timeStamp() }
      ],
      link: [
        // https://favicon.io/favicon-converter
        { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [
        { async: true, src: '/js/scripts.js' }
      ]
    }
  },

  modules: ['@pinia/nuxt', '@nuxt/content'],

  nitro: {
    output: {
      publicDir: path.join(__dirname, '.output/public')
    }
  },

  hooks: {
    'build:manifest': (manifest) => {
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
      if (css) {
        for (let i = css.length - 1; i >= 0; i--) {
          if (css[i].startsWith('entry')) css.splice(i, 1)
        }
      }
    }
  }
}