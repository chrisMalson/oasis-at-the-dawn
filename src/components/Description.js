import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  container: {
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

        <span>Oasis at the Dawn is a large, two bedroom, two bath condominium that will accommodate up to 6 guests. The large
        floor plan includes a full kitchen and dining area along with a full size washer and dryer for the convenience of
        the guests. The living area features a queen sleeper sofa with a 3" foam mattress,  a 50" Smart TV, and a
        gliding reclining chair for guests who prefer their afternoon naps in a recliner!  The primary bedroom features
        a king bed, 43"  TV and en suite bath with step in shower.  The second bedroom also features a king bed and a 43"
        TV (non-cable, Smart TV in this bedroom).   This condo is perfect for two couples to share - each will have a
        king size bed.  This home has Xfinity X1 delivering 140 HD channels plus over 500 movies on demand. This condo
        also features 200mgb wireless internet to complete the package.<br /><br />

        The Dawn Galveston is located close to many of Galveston's best attractions and on the world famous "Seawall"
        at the shores of the Gulf of Mexico. Walk to shopping, restaurants, ice cream, fishing and the beach. Guests
        could easily park their vehicle upon arrival and never drive again until check-out. The Dawn is walking
        distance to Walmart, McDonald’s, Pit Stop BBQ, Papa John’s, Jimmy John’s, Sonic, Golden Corral, Happy Buddha,
        Waffle House, Orange Leaf Frozen Yogurt, Frios Gourmet Pops {'&'} Island Froyo, Rita’s Italian Ice, Seawall
        Souvenirs, Valero Corner Store, Babe’s Beach and the world’s longest continuous sidewalk, Seawall
        Boulevard.<br /><br />

        All reservations at The Dawn Condominiums require a $30 parking fee per vehicle (two max); we have reduced
        our rates to cover this charge. The Dawn does not allow boats, RV’s or trailers to be parked on-premises.
        The Dawn requires this fee be paid directly to The Dawn HOA at their front office upon arrival.  When
        registering at The Dawn guests will receive their pool/gym bands (up to 6 for a one-bedroom and up to 8
        for a two-bedroom) and access codes for parking gates, walk-through gates and for the fitness center.
        Pool/gym bands should be returned to The Dawn prior to departure.<br /><br />

        Pets are not allowed; minimum age of 21 years or older to rent.</span>
      </Typography>     
    </div>
  )
};

export default Description;
