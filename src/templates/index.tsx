import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import Pagination from '../components/Pagination';
import ExperienceCard from '../components/ExperienceCard';

import Typist from 'react-typist';
import '../styles/Typist.css';

import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styled from '@emotion/styled';

import RehypeReact from 'rehype-react';

import {
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
} from '../styles/shared';
import { PageContext } from './post';
import { Typography } from '@material-ui/core';

const HomePosts = css`
.project-card {
  position: relative;
  flex: 1 1 auto;
}

@media (max-width: 1152px) {
.vertical-timeline-element-content-arrow {
    visibility: hidden;
  }
}

.experience-card {
  position: relative;
  flex: 1 1 auto;
}

  @media (min-width: 795px) {

    .post-card:nth-of-type(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      border-radius: 5px 0 0 5px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) h2 {
      font-size: 2.6rem;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) p {
      font-size: 1.8rem;
      line-height: 1.55em;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`;

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const ResumeP = styled.p`
  font-size: 1em !important;
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    p: ResumeP,
  },
}).Compiler;

const Ast = ({ ast, ...props }: any) => {
  ast.properties = props;
  return renderAst(ast);
};

const ProjectBlock = styled.div`
  background-color: #c97474;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 80px;
`;

const ResumeBlock = styled.div`
  background-color: #5474af;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 80px;
`;

const BlogBlock = styled.div`
  background-color: #36aa9d;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 80px;
`;

const ProjectBlockHeader = styled.h1`
  justify-self: center;
  color: #eceff1;
  padding-bottom: 20px
`;

const ResumeBlockHeader = styled.h1`
  justify-self: center;
  color: #eceff1;
  padding-bottom: 20px
`;

const BlogBlockHeader = styled.h1`
  justify-self: center;
  color: #eceff1;
  padding-bottom: 20px
`;

const IndexPage: React.FC<IndexProps> = props => {
  const width = props.data.header.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
  const height = String(Number(width) / props.data.header.childImageSharp.fluid.aspectRatio);

  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && <meta name="google-site-verification" content={config.googleSiteVerification} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
      </Helmet>
      <Wrapper>
        <header
          css={[outer, SiteHeader]}
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fluid.src}')`,
          }}
        >
          <SiteHeaderContent style={{ height: '20em' }}>
            <Typist className="code">
              <SiteTitle>{"Hi, I'm Jared."}</SiteTitle>
              <Typist.Delay ms={500} /> 
              <br />
              <SiteDescription>{config.description}</SiteDescription>
            </Typist>
          </SiteHeaderContent>
        </header>
        <main id="site-main">
          <ProjectBlock>
            <div css={inner}>
              <ScrollAnimation animateOnce animateIn="fadeIn" style={{ display: 'grid' }}>
                <ProjectBlockHeader>Projects</ProjectBlockHeader>
              </ScrollAnimation>

              <ScrollAnimation animateOnce animateIn="fadeIn">
                <div css={[PostFeed]}>
                  {props.data.allMarkdownRemark.edges.map(post => {
                    // filter out drafts in production
                    return (
                      (post.node.frontmatter.type === 'project') && (
                        <PostCard key={post.node.fields.slug} post={post.node} />
                      )
                    );
                  })}
                </div>
              </ScrollAnimation>
            </div>
          </ProjectBlock>

          <ResumeBlock>
            <div css={inner}>
              <ScrollAnimation animateOnce animateIn="fadeIn" style={{display: 'grid'}}>
                <ResumeBlockHeader>Resume</ResumeBlockHeader>
              </ScrollAnimation>
              <VerticalTimeline>
                {props.data.allMarkdownRemark.edges.map((md: any) => {
                  const { htmlAst } = md.node;
                  const { title, subtitle, date, tags, image } = md.node.frontmatter;

                  return (
                    (md.node.frontmatter.type === 'resume') && (
                      <VerticalTimelineElement key={title}
                        className={`vertical-timeline-element--${tags[0]}`}
                        contentStyle={{ background: 'rgb(84, 116, 175, 0)', color: '#fff', boxShadow: 'none' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date={date}
                        dateClassName={'date'}
                        iconStyle={{boxShadow: 'none'}}
                        icon={image === null ? null : <Img
                          alt={`${title} cover image`}
                          style={{ width: '4em' }}
                          fluid={image.childImageSharp.fluid}
                        />}
                      >
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="h5">{subtitle}</Typography>
                        <Ast ast={htmlAst} />
                      </VerticalTimelineElement>
                    )
                  );
                }
                )}
              </VerticalTimeline>
            </div>
          </ResumeBlock>

          <BlogBlock>
            <div css={inner}>
              <ScrollAnimation animateOnce animateIn="fadeIn" style={{display: 'grid'}}>
                <BlogBlockHeader>Blog</BlogBlockHeader>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeIn">
                <div css={[PostFeed]}>
                  {props.data.allMarkdownRemark.edges.map(post => {
                    // filter out drafts in production
                    return (
                      (post.node.frontmatter.type === 'post' && (
                        <PostCard key={post.node.fields.slug} post={post.node} />
                      ))
                    );
                  })}
                </div>
              </ScrollAnimation>
            </div>
          </BlogBlock>
        </main>
        {props.children}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/banner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { draft: { ne: true } } },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            type
            title
            subtitle
            date
            tags
            draft
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            url
          }
          html
          htmlAst
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
