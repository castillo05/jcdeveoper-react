import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

// Grid
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// Card Action
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(theme=> ({
  root: {
    flexGrow: 1,
    maxWidth:400,
  },
  media:{
    height:140
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const data=[0,1,2,3];

const useStyles2=makeStyles(styles);

export default function Components(props) {
  const classes = useStyles2();
  const classes2=useStyles();
  const { ...rest } = props;
  return (
    <div>
      
      <Header
        brand="JC Developer"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/coding.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Jorge Castillo</h1>
                <h3 className={classes.subtitle}>
                  Programación Web, Bases de Datos, Linux y más...
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
     
      <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map(d => (
          <Grid item xs={12} sm={6} lg={3}>
                    {/* Card */}
                            <Card className={classes2.root}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes2.media}
                                  image=""
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              <CardActions>
                                <Button size="small" color="primary">
                                  Share
                                </Button>
                                <Button size="small" color="primary">
                                  Learn More
                                </Button>
                              </CardActions>
                      </Card>
                      {/* End Card */}
                  </Grid>
        ))}
        
       
      </Grid>
    </div>
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
