import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#797979',
    color: '#fff',
    padding: '1em 0',
    width: "100%",
    height: "4.5em",
  },
  text: {
    paddingLeft: '1em',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '5em',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0'
    }
  }
}));

const Footer = () => {
  const { container, text } = useStyles();
  const theme = useTheme();

  return (
    <div className={container} style={{ height: !useMediaQuery('(min-width: 360px)') && '10em'}}>
      <Typography className={text} variant="body2" align={useMediaQuery(theme.breakpoints.up('md')) ? "center" : 'inherit'}>
        Oasis at the Dawn<br />
        7000 Seawall Blvd
        {useMediaQuery('(min-width:450px)') ? ', ' : <br />}
        Unit #511<br />
        Galveston, TX
        {useMediaQuery('(min-width:450px)') && ' 77551'}
      </Typography>
    </div>
  );
};

export default Footer;