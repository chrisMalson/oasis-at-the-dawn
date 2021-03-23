import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { BookNowHeader } from "./BookNow";
import hero_img from "../img/hero_img.jpg";

const useStyles = makeStyles(theme => ({
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 auto",
    backgroundImage: `url(${hero_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "85vh",
    backgroundRepeat: "no-repeat",
  },
  textContainer: {
    backgroundImage: 'linear-gradient(rgba(0,0,255,0.5), rgba(0,0,0,0))',
    paddingTop: '8%',
    [theme.breakpoints.up('lg')]: {
      paddingTop: '4%'
    }
  },
  buttonContainer: {
    background: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.75) 100%)',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '2.5em'
    }
  },
  text: {
    // fontFamily: '"Kaushan Script"',
    textAlign: "center",
    color: "#fff",
    padding: "0.5rem",
    textShadow: `2px 2px 0 #0006`,
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

  if (useMediaQuery(theme.breakpoints.up('md'))) {
    headerVariant = "h1";
  }

  return (
    <div className={hero}>
      <div className={textContainer}>
        <Typography variant={headerVariant} className={text}>Oasis
        {useMediaQuery(theme.breakpoints.up('sm')) ? ' ' : <br /> /*text breaks after first word*/}
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