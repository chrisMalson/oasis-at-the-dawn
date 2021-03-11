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
    width: "550px",
    height: "400px",
    justifyContent: "center"
  },
  image: {
    minWidth: "200px",
    maxWidth: "100%",
    height: "350px",
    padding: "1em 1em 0.5em 1em"
  }
});

const Photo = ({ item }) => {
  const { paper, image } = useStyles();

  return (
    <Paper className={paper} elevation={2}>
      <img className={image} src={item.image} alt={item.description} />
      <Typography variant="h6" align="center" gutterBottom>{item.description}</Typography>
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