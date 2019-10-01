const navConfig = {
  'Autokin Basics': {
    url: 'https://www.autokinjs.com/docs',
    description:
      'Learn.'
  },
  'Autokin Server': {
    url: 'https://www.autokinjs.com/docs/autokin-server',
    description:
      'Configure.'
  },
  'Autokin Client (React)': {
    url: 'https://www.autokinjs.com/docs/react',
    description:
      "Manage."
  },
  'Autokin Graph Manager': {
    url: 'https://www.autokinjs.com/docs/graph-manager',
    description:
      "Enhanced security."
  },
  'Autokin Client (iOS)': {
    url: 'https://www.autokinjs.com/docs/ios',
    description:
      "Operations."
  },
  'Autokin Link': {
    url: 'https://www.autokinjs.com/docs/link',
    description:
      'Define a custom chain of actions that your client performs with each GraphQL operation.'
  }
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
  siteName: 'Autokin Docs',
  menuTitle: 'Autokin Platform',
  trackingId: 'UA-X74643563-13',
  algoliaApiKey: 'x768e823959d35bbd51e4b2439be13fb7',
  algoliaIndexName: 'autokinsearchdata',
  baseUrl: 'https://www.autokinjs.com',
  twitterHandle: 'autokinjs',
  spectrumHandle: 'Autokin',
  youtubeUrl: 'https://www.youtube.com/',
  logoLink: 'https://www.autokinjs.com/docs/',
  navConfig,
  footerNavConfig
};
