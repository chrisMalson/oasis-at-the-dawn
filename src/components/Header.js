import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BookNowButton from "./BookNowButton";
import hero_img from "../img/hero_img.jpg";

const useStyles = makeStyles({
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "60vh",
    margin: "0 auto",
    backgroundImage: `url(${hero_img})`,
    backgroundSize: "100%",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
  },
  textContainer: {
    backgroundImage: 'linear-gradient(rgba(0,0,255,0.5), rgba(0,0,0,0))',
    padding: "1.5em 0"
  },
  text: {
    textAlign: "center",
    color: "#fff",
    padding: "0.5rem",
    textShadow: `-1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000`,
  }
});

const Header = () => {
  const { hero, text, textContainer } = useStyles();

  return (
    <div className={hero}>
      <div className={textContainer}>
        <Typography variant="h3" className={text}>Oasis at the Dawn</Typography>
        <Typography variant="h5" className={text}>"Just another vacation home!"</Typography>
      </div>
      <div>
        <BookNowButton />
      </div>
    </div>
  );
};

export default Header;