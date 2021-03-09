import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    margin: "2em 3.5em"
  }
});

const Description = () => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <p>
        This is a vacation place, which means that if you're looking to stay at a place that is different 
        from the place in which you currently reside, then you can stay at this place. It costs money to
        stay at the place, but in exchange for spending money you get the opportunity to stay at the place
        because you paid money for the ability to stay there. While you're there, you can choose to either stay
        at the place the entire time or leave periodically to do things in the immediate area. You can also
        choose to leave and do things that are significantly further away from the vacation place, but at some
        point there is inevitably a diminishing returns effect in which you may as well have either chosen a
        vacation place that was closer to the intended destination or perhaps decided not to stay at a vacation
        place to begin with. However, the decision is yours to make and so if you want to give us money to stay
        at this place for some time then what you do with that time is your business.
      </p>
      <ul>
        <li>1,116 sqft condo</li>
        <li>2 bedrooms, 2 bathrooms</li>
        <li>Sleeps up to 6 people with sleeper sofa</li>
        <li>Recently remodeled; tile floors / granite countertops</li>
        <li>Community heated pool and hot tub nearby</li>
      </ul>
    </div>
  )
};

export default Description;

// 1. first floor - no stairs
// 2. in the back of the complex - no noise from beach parties at night
// 3. heated pool right next to back patio
