import React,{useState,useEffect} from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';

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
             
                <Input
                    autoFocus={true}
                    placeholder='Buscar'
                    onChange={(e)=>{
                        e.preventDefault()
                        props.handleInputChange(e.target.value)
                    }}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                        <SearchIcon color="secondary"/>
                        </InputAdornment>
                    }
                />
            
           
        </div>
    )
}
export default Search;