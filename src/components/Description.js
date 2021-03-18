import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  container: {
    color: '#000d',
    margin: "2em 3.5em",
    [theme.breakpoints.up("lg")]: {
      margin: "2em 25%"
    }
  },
  motto: {
    fontFamily: '"Kaushan Script"',
    marginBottom: '2rem'
  }
}));

const Description = () => {
  const { container, motto } = useStyles();

  return (
    <div className={container}>
      <Typography align="center" color="secondary" variant="h3" className={motto}>
        "Life's better at the beach!"
      </Typography>
      <Typography>
        Oasis at the Dawn is a peaceful and quiet first floor condo surrounded by beautiful grounds and palm trees,
        located only steps away from the swimming pool and across the Seawall from the recently restored "Babe's Beach".
        This condo was recently remodeled and the large open floor plan features tile floors and an updated kitchen with
        granite counters.  Guests will enjoy fun in the sun all day, dining and clubbing in the evening and peaceful
        reflection in the evening.<br /><br />

        Oasis at the Dawn is a large, two bedroom, two bath condominium that will accommodate up to 6 guests. The large
        floor plan includes a full kitchen and dining area along with a full size washer and dryer for the convenience of
        the guests. This condo is perfect for two couples to share - each will have a
        king size bed.<br /><br />

        The Dawn Galveston is located close to many of Galveston's best attractions and on the world famous "Seawall"
        at the shores of the Gulf of Mexico. Walk to shopping, restaurants, ice cream, fishing and the beach. Guests
        could easily park their vehicle upon arrival and never drive again until check-out. The Dawn is walking
        distance to Walmart, McDonald’s, Pit Stop BBQ, Papa John’s, Jimmy John’s, Sonic, Golden Corral, Happy Buddha,
        Waffle House, Orange Leaf Frozen Yogurt, Frios Gourmet Pops {'&'} Island Froyo, Rita’s Italian Ice, Seawall
        Souvenirs, Valero Corner Store, Babe’s Beach and the world’s longest continuous sidewalk, Seawall
        Boulevard.<br /><br />
      </Typography>     
    </div>
  )
};

export default Description;
