import React,{Component,useEffect,useState} from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
// Axios
import Axios from "axios";
// Avatar
import Avatar from '@material-ui/core/Avatar';
import avatar from "assets/img/faces/mi.jpg";


const dashboardRoutes = [];

const useStyles2 = makeStyles(styles);
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function LandingPage(props) {
 
  const classes = useStyles2();
 
  const { slug2,...rest } = props;
  
  const {slug}=props.match.params.slug;
  console.log(slug2)
 
  const [post,setPost]=useState({});
  // Hook para manejar la url de la api
  const [apiUrl, setApiUrl] = useState(`https://jcdeveloperteam.herokuapp.com/api/post/${props.match.params.slug}`);

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  useEffect(()=>{
    
    const getPost= async()=>{
      const result= await Axios(apiUrl,{

      });
      
      setPost(result.data.publicacion)
    }

    getPost()
  },[apiUrl])

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="JC Developer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={post.image}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
      <h1 className={classes.title}>{post.title}</h1>
              <h4 className={classes.title}>
                {post.resume}
              </h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
            <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection description={post.description} avatar={avatar}/>
          {/* <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
