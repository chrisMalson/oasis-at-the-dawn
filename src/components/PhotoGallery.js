import { Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Carousel from 'react-material-ui-carousel';

import photos from '../img/photos';

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "550px",
    height: "400px",
  },
  gradient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: '25%',
    background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))',
    color: '#fff'
  }
});

const Photo = ({ item }) => {
  const { paper, gradient } = useStyles();

  return (
    <Paper className={paper} elevation={2} style={{ backgroundImage: `url(${item.image})` }}>
      <div className={gradient}>
        <Typography variant="h6" align="center" gutterBottom>{item.description}</Typography>
      </div>
    </Paper>
  );
};

const PhotoGallery = () => {
  const { container } = useStyles();
  const theme = useTheme();

  const allPhotos = photos.map((item, i) => <Photo key={i} item={item} />);

  return (
    <div className={container}>
      <Carousel
        autoPlay={false}
        animation="slide"
        navButtonsProps={{
          style: {
            backgroundColor: theme.palette.secondary.main
          }
        }}
      >
        {allPhotos}
      </Carousel>
    </div>
  );
};

export default PhotoGallery;