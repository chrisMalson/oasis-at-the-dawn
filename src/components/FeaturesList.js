import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import Filter2OutlinedIcon from '@material-ui/icons/Filter2Outlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined';
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles(theme => ({
  list: {
    margin: '1.5em',
    [theme.breakpoints.up('sm')]: {
      marginLeft: "15%",
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '30%'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '-3em'
    }
  },
  icon: {
    color: theme.palette.secondary.main
  }
}));

const FeaturesList = () => {
  const { list, icon } = useStyles();

  return (
    <List className={list}>
      <ListItem>
        <ListItemIcon className={icon}>
          <HomeWorkOutlinedIcon />
        </ListItemIcon>
        <ListItemText>1,116 sqft condo</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <Filter2OutlinedIcon />
        </ListItemIcon>
        <ListItemText>2 bedrooms, 2 bathrooms</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <HotelOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Sleeps 6 people comfortably with 2 king size beds / sleeper sofa</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <EmojiTransportationOutlinedIcon />
        </ListItemIcon>
        <ListItemText>First floor condo; easy access from parking lot</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <VolumeOffOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Located in back of complex, away from road and noise</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <KitchenOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Full size kitchen and laundry room</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <PoolOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Community has two pools (one heated!) and hot tub nearby</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <BeachAccessIcon />
        </ListItemIcon>
        <ListItemText>Walking distance from beach, shops and attractions</ListItemText>
      </ListItem>
    </List>
  );
};

export default FeaturesList;

// 1. first floor - no stairs
// 2. in the back of the complex - no noise from beach parties at night
// 3. heated pool right next to back patio
