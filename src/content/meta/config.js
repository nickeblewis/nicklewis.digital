const base = {
  name: 'Nick Lewis Digital',
  url: 'https://github.com/greglobinski/gatsby-starter-kit'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - web, photography and content`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'web, photography and content',

  /* url */
  siteUrl: base.url,
  siteImage: 'preview.png',
  // pathPrefix: '',

  // author
  authorName: 'nick lewis'
};

module.exports = config;
