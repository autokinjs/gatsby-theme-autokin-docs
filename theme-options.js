const navConfig = {
  
};

const footerNavConfig = {
  Blog: {
    href: 'https://blog.autokinjs.com/',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  Contribute: {
    href: 'https://www.autokinjs.com/docs/community/'
  },
  'GraphQL Summit': {
    href: 'https://summit.graphql.com/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
};

module.exports = {
  siteName: 'Autokin Automation',
  menuTitle: 'Autokin Automation Platform',
  trackingId: 'UA-X74643563-13',
  algoliaApiKey: 'b486f2784ca0ce85a380724c2e5fb36a',
  algoliaIndexName: 'autokin_docs',
  baseUrl: 'https://www.autokinjs.com',
  twitterHandle: 'autokinjs',
  spectrumHandle: 'Autokin',
  youtubeUrl: 'https://www.youtube.com/autokin',
  logoLink: 'https://www.autokinjs.com/docs/',
  navConfig,
  footerNavConfig
};
