import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Carousel from 'react-material-ui-carousel';

import photos from '../img/photos';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "100vw",
    height: '300px',
    [theme.breakpoints.up('sm')]: {
      height: "600px",
    },
    [theme.breakpoints.up('lg')]: {
      width: '60vw',
    },
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  gradient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: '2.5em',
    background: `linear-gradient(
      to right,
      ${theme.palette.secondary.main}88,
      ${theme.palette.secondary.main},
      ${theme.palette.secondary.main}88
    )`, //converts to 8-digit hex value
    color: '#fff'
  }
}));

const Photo = ({ item }) => {
  const { paper, gradient, caption } = useStyles();
  const theme = useTheme();

  return (
    <Paper className={paper} elevation={2} style={{ backgroundImage: `url(${item.image})` }}>
      <div className={gradient}>
        <Typography variant={useMediaQuery(theme.breakpoints.up('md')) ? "h6" : "body1"} align="center" gutterBottom>{item.description}</Typography>
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
        indicators={false}
        PrevIcon={<NavigateBeforeIcon fontSize={useMediaQuery(theme.breakpoints.up('sm')) ? "default" : "large"} />}
        NextIcon={<NavigateNextIcon fontSize={useMediaQuery(theme.breakpoints.up('sm')) ? "default" : "large"} />}
        navButtonsProps={{
          style: {
            backgroundColor: useMediaQuery(theme.breakpoints.up('sm')) ? theme.palette.primary.main : 'transparent',
            color: '#000'
          },       
        }}
      >
        {allPhotos}
      </Carousel>
    </div>
  );
};

export default PhotoGallery;