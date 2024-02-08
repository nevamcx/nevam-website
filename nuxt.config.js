export default {

  ssr: false,

  components: [
    {
      dirs: [
        '~/components',
        '~/components/atoms',
        '~/components/molecules',
        '~/components/organisms'
      ],
    }
  ],

  app: {

    head: {
      title: 'Nevam CX',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Nevam CX' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [ 
        // https://favicon.io/favicon-converter
        { rel: 'stylesheet', type: 'text/css', href: '/css/normalize.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/webflow.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/main.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/custom.css' }
      ],
      script: [
        { 
          async: false, 
          type: 'text/javascript',
          src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js' 
        },
        { 
          async: false, 
          type: 'text/javascript',
          src: '/js/main.js' 
        },
        { 
          async: true, 
          type: 'text/javascript',
          src: '/js/jquery.js' 
        },
        { 
          async: true, 
          type: 'text/javascript',
          src: '/js/webflow.js' 
        }
      ]
    }
  },

  modules: [
    '@pinia/nuxt'
  ]
}