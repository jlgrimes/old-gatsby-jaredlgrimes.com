import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Zoom from 'react-reveal/Zoom';
import { css } from '@emotion/core';

const CardStyles = css`
  padding: 10px;
`;

export interface ExperienceCardProps {
    node: any;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ node }) => {
  return(
    <div 
      className="experience-card"
      css={CardStyles}
    >
      <Zoom>
        <Card>
          <CardContent>
            <h1>{node.frontmatter.title}</h1>
            {node.excerpt}
          </CardContent>
        </Card>
      </Zoom>
    </div>
  )
}

export default ExperienceCard;