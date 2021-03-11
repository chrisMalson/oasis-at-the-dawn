import { Divider, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import Filter2OutlinedIcon from '@material-ui/icons/Filter2Outlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined';


const useStyles = makeStyles(theme => ({
  container: {
    margin: "2em 3.5em",
    [theme.breakpoints.up("md")]: {
      margin: "2em 25%"
    }
  },
  list: {
    textAlign: "center",
    margin: "2em 25%"
  }
}));

const Description = () => {
  const { container, list } = useStyles();

  return (
    <div className={container}>
      <Typography align="center" color="secondary" variant="h3" gutterBottom>
        "Just another vacation home!"
      </Typography>
      <Typography>
        This is a vacation place, which means that if you're looking to stay at a place that is different 
        from the place in which you currently reside, then you can stay at this place. It costs money to
        stay at the place, but in exchange for spending money you get the opportunity to stay at the place
        because you paid money for the abiListItemty to stay there. While you're there, you can choose to either stay
        at the place the entire time or leave periodically to do things in the immediate area. You can also
        choose to leave and do things that are significantly further away from the vacation place, but at some
        point there is inevitably a diminishing returns effect in which you may as well have either chosen a
        vacation place that was closer to the intended destination or perhaps decided not to stay at a vacation
        place to begin with. However, the decision is yours to make and so if you want to give us money to stay
        at this place for some time then what you do with that time is your business.
      </Typography>
      <List className={list}>
        <ListItem>
          <ListItemIcon>
            <HomeWorkOutlinedIcon />
          </ListItemIcon>
          <ListItemText>1,116 sqft condo</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Filter2OutlinedIcon />
          </ListItemIcon>
          <ListItemText>2 bedrooms, 2 bathrooms</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <HotelOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Sleeps up to 6 people with sleeper sofa</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <EmojiTransportationOutlinedIcon />
          </ListItemIcon>
          <ListItemText>First floor condo; easy access from parking lot</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <VolumeOffOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Located in back of complex, away from road and noise</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <FlareOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Recently remodeled; tile floors / granite countertops</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <PoolOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Community heated pool and hot tub nearby</ListItemText>
        </ListItem>
      </List>
    </div>
  )
};

export default Description;

// 1. first floor - no stairs
// 2. in the back of the complex - no noise from beach parties at night
// 3. heated pool right next to back patio
