import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { BookNowHeader } from "./BookNow";
import hero_img from "../img/hero_img.jpg";

const useStyles = makeStyles(theme => ({
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "60vh",
    [theme.breakpoints.down('sm')]: {
      height: "75vh",
    },
    margin: "0 auto",
    backgroundImage: `url(${hero_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center 25%",
    backgroundRepeat: "no-repeat",
  },
  textContainer: {
    backgroundImage: 'linear-gradient(rgba(0,0,255,0.5), rgba(0,0,0,0))',
    padding: "1.5em 0"
  },
  buttonContainer: {
    background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.75))'
  },
  text: {
    // fontFamily: '"Kaushan Script"',
    textAlign: "center",
    color: "#fff",
    padding: "0.5rem",
    textShadow: `-1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000`,
  }
}));

const Header = () => {
  const { hero, text, textContainer, buttonContainer } = useStyles();
  const theme = useTheme();

  let headerVariant;

  
  if (useMediaQuery(theme.breakpoints.up('sm'))) {
    headerVariant = "h2";
  } else {
    headerVariant = "h3";
  }

  if (useMediaQuery(theme.breakpoints.up('lg'))) {
    headerVariant = "h1";
  }

  return (
    <div className={hero}>
      <div className={textContainer}>
        <Typography variant={headerVariant} className={text}>Oasis
        {useMediaQuery(theme.breakpoints.up('sm')) ? ' ' : <br />}
        at the Dawn</Typography>
        <Typography variant="h5" className={text}>Galveston, Texas</Typography>
      </div>
      <div className={buttonContainer}>
        <BookNowHeader />
      </div>
    </div>
  );
};

export default Header;