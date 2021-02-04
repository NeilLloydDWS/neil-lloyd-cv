module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'CV by Neil Lloyd',
  keywords:
    'Neil Lloyd, Azure, Cloud, Architect',
  subtitle: 'Developer. Optimizer. Learner.',
  copyright: '© 2021 | Queenstown, New Zealand',
  disqusShortname: 'neillloyd',
  postsPerPage: 20,
  googleAnalyticsId: '',
  menu: [
    {
      label: 'CV',
      path: '/'
    }
  ],
  author: {
    name: 'Neil Lloyd',
    photo: '/mesmall.jpg',
    bio: 'Architect. Developer. Optimizer. Leader.',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: '',
      twitter: '',
      linkedin: 'neil-lloyd-nz',
      telegram: 'neilfalloyd',
      instagram: '',
      facebook: '',
      email: 'neil@pointedfox.com',
      rss: '/rss.xml'
    }
  }
}
