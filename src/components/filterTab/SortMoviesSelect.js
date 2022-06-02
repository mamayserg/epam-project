import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sortMovieBy } from './constants'
// import { useLocation } from "react-router-dom";

export default function SortMoviesSelect() {
  // let location = useLocation();

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value );
  };

  return (
    <div className="pt-3">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
        >
          { sortMovieBy.map((item) => ( <MenuItem key={item.value} value={item.value}>
           
            <span className="text-xs text-white font-light"> {item.name}</span> 
            </MenuItem> )) }
        </Select>
      </FormControl>
      </div>
  );
}
