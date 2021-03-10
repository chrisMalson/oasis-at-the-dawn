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
    padding: "3em"
  }
}));

const BookNowButton = () => {
  const { button, container } = useStyles();

  return (
  <div className={container}>
    <Fab
      className={button}
      href="https://www.galvestontxbeachrental.com/dawn_511_oasis-at-the-dawn/"
      target="_blank"
      variant="extended"
    >
      <Typography align="center" variant="h4">
        Book Now
      </Typography>
    </Fab>
  </div>
  );
};

export default BookNowButton;