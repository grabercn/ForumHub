// AppCard.jsProduct
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AppCard = ({ forum, onClick }) => {
  const handleMouseEnter = () => {
    // add future mouse enter logic here
  };

  const handleMouseLeave = () => {
    // add future mouse leave logic here
  }

  return (
    <div className="card-container" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      <Card variant="outlined" onClick={() => onClick(forum)}>
        <CardContent>
          <Typography variant="h5" component="div">
            {forum.forumName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {forum.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppCard;
