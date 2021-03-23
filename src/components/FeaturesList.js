import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined';
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined';
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined';


const useStyles = makeStyles(theme => ({
  list: {
    margin: '1.5em',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: "15%",
    // },
    [theme.breakpoints.up('md')]: {
      marginLeft: '5%'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '-3em',
      marginBottom: '0'
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
        <ListItemText>Large first floor condo with easy access from parking lot and away from the road noise</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <HotelOutlinedIcon />
        </ListItemIcon>
        <ListItemText>With 2 bedrooms and king beds, a queen size sleeper and two bathrooms it houses 6 people comfortably</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <KitchenOutlinedIcon />
        </ListItemIcon>
        <ListItemText>A full size kitchen, dining area and laundry room provide all the comforts of home for long term stays</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <PoolOutlinedIcon />
        </ListItemIcon>
        <ListItemText>The Dawn has two large swimming pools (The closest one heated), a hot tub and an exercise room</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <BeachAccessOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Walking distance from beach, shops and attractions</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon className={icon}>
          <DriveEtaOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Right on Seawall Blvd and across the street from Babe's Beach with the only free parking on the island</ListItemText>
      </ListItem>
    </List>
  );
};

export default FeaturesList;
