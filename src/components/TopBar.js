import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  burger: {
    marginRight: '1em'
  }
});

const TopBar = () => {
  const { burger } = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start">
          <MenuRoundedIcon className={burger} fontSize="large" />
        </IconButton>
        <Typography variant="h6">Oasis at the Dawn</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;