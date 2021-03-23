import { makeStyles } from '@material-ui/core/styles';

import Description from './Description';
import FeaturesList from './FeaturesList';
import PhotoGallery from './PhotoGallery';

// this component serves as a div that contains the photos and list
// and was refactored to work well with flexbox

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between'
    },
    background: '#efefef'
  },
  listContainer: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      margin: '0 5%'
    }
  }
}));

const Info = () => {
  const { container, listContainer } = useStyles();

  return (
    <div>
      <Description />
      <div className={container}>
        <div className={listContainer}>
          <FeaturesList />
        </div>
        <PhotoGallery />
      </div>
    </div>
  );
};

export default Info;