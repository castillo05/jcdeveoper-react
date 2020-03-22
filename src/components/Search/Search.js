import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const Search=(props)=>{
    const classes = useStyles();
    return(
        <div>
             <form className={classes.root} noValidate autoComplete="off">
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                        <SearchIcon color="secondary"/>
                        </InputAdornment>
                    }
                />
            </form>
        </div>
    )
}

export default Search;