import { useState } from 'react';
import { Fab, Typography } from "@material-ui/core";
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
    color: "#000",
    textShadow: `-1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff`,
  },
  popup: {
    position: "fixed",
    bottom: "1em",
    right: "1em"
  }
}));

const BookNowButton = () => {
  const { button, container, text } = useStyles();

  return (
  <div className={container}>
    <Fab
      className={button}
      href="https://www.galvestontxbeachrental.com/dawn_511_oasis-at-the-dawn/"
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
  const [visible, setVisible] = useState(false);
  const { popup } = useStyles();

  return (
    <div className={popup}>
      <Typography variant="h1"><a href="https://google.com">book now</a></Typography>
    </div>
  );
};


export { BookNowButton, BookNowPopup };

