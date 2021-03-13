import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '1em',
    paddingTop: '1.5em',
    width: "100%",
    height: "5em"
  }
}));

const Footer = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Typography variant="body2" align="center">
        Oasis at the Dawn<br />
        7000 Seawall Blvd, Unit #511<br />
        Galveston, TX 77551
      </Typography>
    </div>
  );
};

export default Footer;