import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '1em',
    width: "100%",
    height: "5em"
  }
}));

const Footer = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Typography variant="h3" align="center">This is a footer.</Typography>
    </div>
  );
};

export default Footer;