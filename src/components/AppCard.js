// AppCard.jsProduct
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const AppCard = ({ forum, onClick }) => {
  const handleMouseEnter = () => {
    // add future mouse enter logic here
  };

  const handleMouseLeave = () => {
    // add future mouse leave logic here
  }

  return (
    <div className="card-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card variant="outlined" onClick={() => onClick(forum)}>
        <div className="card-header">
          <Paper elevation={3} 
            className="photo-container" 
            style={{ display: "flex", justifyContent: "center" }}>
              <img src={forum.imgUrl || "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"} alt="Forum Photo" className="photo" style={{ width: "100%", height: "auto", margin: "10px", alignSelf: "center" }} />
          </Paper>
        </div>
        <CardContent>
          <Typography variant="h5" component="div" className="forum-name">
            {forum.forumName}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="description">
            {forum.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppCard;
