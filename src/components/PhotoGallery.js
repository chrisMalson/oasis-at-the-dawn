import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import exterior1 from "../img/exterior1.png";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    display: "flex",
    maxWidth: "550px",
    justifyContent: "center",
  },
  image: {
    minWidth: "500px",
    maxWidth: "100%",
    padding: "1em"
  }
});

const PhotoGallery = () => {
  const { container, image, paper } = useStyles();

  return (
    <div className={container}>
      <Paper className={paper} elevation={2}>
        <img className={image} src={exterior1} />
      </Paper>
    </div>
  );
};

export default PhotoGallery;