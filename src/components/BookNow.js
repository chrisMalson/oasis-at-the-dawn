import { useEffect, useState } from 'react';
import { Button, Slide, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "1em",
    [theme.breakpoints.up('sm')]: {
      margin: '1em 25%'
    }
  },
  button: {
    background: theme.palette.primary.main,
    '&:hover': {
      background: '#bff'
    },
    padding: "1.5em 2em",
    borderRadius: '10px',
  },
  popup: {
    position: "fixed",
    bottom: "0px",
    right: "0px",
  }
}));

const bookingURL = "https://www.galvestontxbeachrental.com/dawn_511_oasis-at-the-dawn/";

const BookNowButton = ({ isPopup }) => {
  const { button } = useStyles();
  const theme = useTheme();

  return (
  <Button
    className={button}
    style={isPopup ? { padding: '0.75em 1em' } : {}} // popup version has less padding than hero embed
    href={bookingURL}
    target="_blank"
    variant="contained"
  >
    <Typography align="center" variant={useMediaQuery(theme.breakpoints.up('sm')) && !isPopup ? 'h5' : 'h6'}>
      Check availability
    </Typography>
  </Button>
  );
};

const BookNowHeader = () => {
  const { container } = useStyles();

  return (
  <div className={container}>
    <BookNowButton isPopup={false} />
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

  // below logic may not work on all devices
  return (
    <Slide direction="left" in={yPos >= 700} mountOnEnter unmountOnExit>
      <div className={popup} style={yPos >= document.documentElement.offsetHeight - window.innerHeight && {
        bottom: '25px',
        right: '10px'
      }}>
        <BookNowButton isPopup />
      </div>
    </Slide>
  );
};


export { BookNowHeader, BookNowPopup };

