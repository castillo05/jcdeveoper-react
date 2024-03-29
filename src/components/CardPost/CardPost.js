import React,{Component,useEffect,useState} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Axios
import Axios from "axios";
import useAxios from 'axios-hooks'
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
import Button from "components/CustomButtons/Button.js";

// Spinner
import LinearProgress from '@material-ui/core/LinearProgress';
// Pagination
import Pagination from '@material-ui/lab/Pagination';
// Link
import {Link} from 'react-router-dom';

import styles from "assets/jss/material-kit-react/views/components.js";
import Quote from "components/Typography/Quote.js";

// Imagen de fondo de post
import bg from 'assets/img/bg.png'

import Search from 'components/Search/Search.js';
  
const useStyles = makeStyles(theme=> ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
      width: 300,
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
  const useStyles2=makeStyles(styles);

  
function CardPost(props){
  const { ...rest } = props;
 
  // Hook para el estado de posts
    const [posts,setPosts] = useState([]);
    // Hook para el estado de carga
    const [loading,setLoading]=useState(true);
    // Hook para tomar la pagina actual
    const [page,setPage]=useState(1);
    // Hook para tomar el numero total de paginas
    const [pages,setPages]=useState();
    // Hook para manejar la url de la api
    const [apiUrl, setApiUrl] = useState('https://jcdeveloperteam.herokuapp.com/api/posts/1');

    // Usado para gargar despues del render el lugar de componentDidmount
    useEffect(()=>{
      const getData= async(num=1)=>{
        const result=await Axios(apiUrl,{
  
        });
        
       setPosts(result.data.posts.docs);
       setPages(result.data.posts.pages)
       setLoading(false);
      }
    getData()
    },[apiUrl])
   

    const onChangePage=(e,page)=>{
      setPage(page)
      setApiUrl('https://jcdeveloperteam.herokuapp.com/api/posts/'+page);
    }

    const handleSearch=async (data)=>{
     
      if(data!==''){
            setApiUrl(`https://jcdeveloperteam.herokuapp.com/api/searchpost/${data}/1`)
            const result=await Axios(apiUrl,{
            });
            setPosts(result.data.posts.docs);
            setLoading(false);
      }else{
        setApiUrl('https://jcdeveloperteam.herokuapp.com/api/posts/1')
      }
    }
        const classes2=useStyles();
        const classes = useStyles2();
        return(
            <div>
                <div className={classes.root}>
                <Search handleInputChange={(data)=>handleSearch(data)}></Search>
                
                <br></br>
                  <Grid container spacing={3}>
                  <Pagination count={pages} color='primary' page={page} onChange={onChangePage}/>
                  <Grid item xs={12} sm={12} lg={12}>
                        {
                                loading && (
                                  <div>
                                      <LinearProgress/>
                                      <LinearProgress color="secondary" />
                                      Loading...
                                  </div>
                                
                                )
                              }
                      </Grid>
                  {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
                  
                    {posts.map((d,index) => (
                    
                      <Grid key={index} item xs={12} sm={6} lg={3}>
                              
                                {/* Card */}
                                        <Card className={classes2.root}>
                                          <CardActionArea>
                                            <CardMedia
                                              className={classes2.media}
                                              image={d.image ? d.image : bg}
                                              title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                              <Typography gutterBottom variant="h5" component="h2">
                                                {d.title}
                                              </Typography>
                                              <Quote text={d.resume} author="Jorge Castillo">
                                                
                                              </Quote>
                                            </CardContent>
                                          </CardActionArea>
                                          <CardActions>
                                            <Button color="primary" simple>
                                              Share
                                            </Button>
                                            <Button color="info" simple>
                                              <Link to={`/blog/${d.slug}`}>Leer Más</Link>
                                            </Button>
                                          </CardActions>
                                  </Card>
                                  {/* End Card */}
                                  
                              </Grid>
                    ))}
                  </Grid>
                <Pagination count={pages} color='primary' page={page} onChange={onChangePage}/>
              </div>
            </div>
        )
   
}

export default CardPost;