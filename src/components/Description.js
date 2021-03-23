import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    color: '#000d',
    margin: "2em 3.5em",
    [theme.breakpoints.up("lg")]: {
      margin: "2em 20%"
    }
  },
  textBox: {
    backgroundColor: '#fff',
    paddingTop: '3em',
    [theme.breakpoints.up('sm')]: {
      padding: '3em'
    }
  },
  motto: {
    fontFamily: '"Kaushan Script"'
  }
}));

const Description = () => {
  const { container, motto, textBox } = useStyles();

  return (
    <div className={container}>
      <Typography
        align="center"
        color="secondary"
        variant={useMediaQuery('(min-width: 400px)') ? 'h3' : 'h4'}
        className={motto}
      >
        "Life is better at the beach!"
      </Typography>
      <Paper elevation={0} className={textBox}>
        <Typography>
          Oasis at the Dawn is a peaceful and quiet first floor condo surrounded by beautiful grounds and palm trees,
          located only steps away from the swimming pool and across the Seawall from the recently restored "Babe's Beach".
          This condo was recently remodeled and the large open floor plan features tile floors and an updated kitchen with
          granite counters.  Guests will enjoy fun in the sun all day, dining and clubbing in the evening and peaceful
          reflection at night.
        </Typography>
      </Paper>     
    </div>
  )
};

export default Description;
