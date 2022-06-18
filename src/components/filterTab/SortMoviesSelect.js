import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  sortBy,
  queryParamsKeys,
  sortOrder,
} from "../../constants/searchParams";
import "./sortMovieSelect.css";

export default function SortMoviesSelect() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState("");
 
  useEffect(() => {
    const sortOrderQuery = searchParams.get(queryParamsKeys.SORT_ORDER);
    const sortByQuery = searchParams.get(queryParamsKeys.SORT_BY);
  
    if (sortByQuery && sortOrderQuery) {
      setValue(sortByQuery);
    }
  }, [searchParams]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setSearchParams({ [queryParamsKeys.SORT_BY]: event.target.value, [queryParamsKeys.SORT_ORDER]: sortOrder.ASC})
  };

  return (
    <div className="pt-1">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
        >
          {sortBy.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              <span className="text-xs text-white font-light uppercase">
                {item.name}
              </span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
