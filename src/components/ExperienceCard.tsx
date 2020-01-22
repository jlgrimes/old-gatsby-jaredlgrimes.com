import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import { css } from '@emotion/core';
import React from 'react';

const CardContentStyles = css`
  display: 'inline-block';
`;

export interface ExperienceCardProps {
  node: any;
}

const ExperienceCardStyles = css`
  display: flex;
  flex-direction: column;
  background: #fff center center;
  background-size: cover;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;
`;

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 40,
    },
    subtitle1: {
      fontSize: 24,
    },
    body1: {
      fontWeight: 500,
      fontSize: 16,
    },
  },
});

const ExperienceCard: React.FC<ExperienceCardProps> = ({ node }) => {
  return (
    <div
      css={ExperienceCardStyles}
    >
      <Zoom>
        <Paper css={CardContentStyles} elevation={0}>
            <ThemeProvider theme={theme}>
            <div style={{padding: "20px"}}>
              {node.frontmatter.image &&
                <Img
                  alt={`${node.frontmatter.title} cover image`}
                  style={{ width: '4em' }}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />}
              <Typography variant="h1">{node.frontmatter.title}</Typography>
              <Typography variant="subtitle1">{node.frontmatter.subtitle}</Typography>
              <Typography variant="body1">{node.excerpt}</Typography>
              </div>
            </ThemeProvider>
        </Paper>
      </Zoom>
    </div>
  );
};

export default ExperienceCard;
