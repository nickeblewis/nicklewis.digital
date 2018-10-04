const base = {
  name: 'Nick Lewis Digital',
  url: 'https://nicklewis.digital'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - web, photography and content`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } photography, web development, blog.`,
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
