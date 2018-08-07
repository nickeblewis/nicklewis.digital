import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import FaTag from 'react-icons/lib/fa/tag';

import 'prismjs/themes/prism-okaidia.css';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Footer,
  Header,
  Branding,
  Menu,
  Article,
  Heading,
  List,
  Seo,
  layout,
  footer,
  header,
  branding,
  menu,
  article,
  heading,
  list,
} from 'gatsby-starter-kit-themes/dist/default';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const PageTemplate = props => {
  const {
    pageContext: { category },
    data: {
      posts: { totalCount, edges },
      footerLinks: { html: footerLinksHTML },
      copyrightNote: { html: copyrightNoteHTML },
    },
  } = props;

  const items = edges.map(edge => edge.node);

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout themeStyle={layout} menu={menu}>
      <Header themeStyle={header} menu={menu}>
        <Branding
          themeStyle={branding}
          title={headerTitle}
          subTitle={headerSubTitle}
        />
        <Menu themeStyle={menu} items={menuItems} />
      </Header>
      <Article themeStyle={article}>
        <Heading themeStyle={heading}>
          <span>Posts in category</span> <FaTag />
          <h1>{category}</h1>
          <p className="meta">
            There {totalCount > 1 ? 'are' : 'is'} <strong>{totalCount}</strong>{' '}
            post{totalCount > 1 ? 's' : ''} in the category.
          </p>
        </Heading>
        <List themeStyle={list} items={items} />
      </Article>
      <Footer
        themeStyle={footer}
        links={footerLinksHTML}
        copyright={copyrightNoteHTML}
      />
      <Seo config={config} />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query CategoryTemplateQuery($slug: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
          }
        }
      }
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyrightNote: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyrightNote/" }
    ) {
      html
    }
  }
`;

export const categoryQuery = graphql`
  query CategoryTemplateQuery($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
          }
        }
      }
    }
  }
`;