import { useEffect, useState } from 'react';
import { Button, Fab, Slide, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "1em 25%"
  },
  button: {
    background: theme.palette.primary.main,
    '&:hover': {
      background: '#bff'
    },
    marginBottom: "2em",
    padding: "3em 2em"
  },
  text: {
    color: theme.palette.primary.dark
  },
  popup: {
    position: "fixed",
    bottom: "0px",
    right: "0px"
  }
}));

const bookingURL = "https://www.galvestontxbeachrental.com/dawn_511_oasis-at-the-dawn/";

const BookNowButton = () => {
  const { button, container, text } = useStyles();

  return (
  <div className={container}>
    <Fab
      className={button}
      href={bookingURL}
      target="_blank"
      variant="extended"
    >
      <Typography align="center" className={text} variant="h4">
        Book Now
      </Typography>
    </Fab>
  </div>
  );
};

const BookNowPopup = () => {
  const [yPos, setYPos] = useState(14);
  const { popup } = useStyles();

  useEffect(() => {
    window.onscroll = () => {
      setYPos(window.pageYOffset);
    };
  }, []);

  return (
    <Slide direction="left" in={yPos >= 700} mountOnEnter unmountOnExit>
      <div className={popup}>
        <Button variant="contained" color="secondary" href={bookingURL}>
          <Typography variant="h6">Book Now</Typography>
        </Button>
      </div>
    </Slide>
  );
};


export { BookNowButton, BookNowPopup };

